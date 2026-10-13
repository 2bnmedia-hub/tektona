import { createClient } from '@supabase/supabase-js';

const MAX_MESSAGES = 12;        // the app sends a system prompt + the last 8 turns
const MAX_TOTAL_CHARS = 40000;
const AI_PLANS = ['pro', 'studio']; // AI Agent is not part of the Solo plan

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Missing authorization token' });

  // The model is fixed server-side and the conversation is size-capped, so a signed-in user
  // can't point our API key at a pricier model or send an arbitrarily large prompt.
  const model = 'gpt-4.1';
  const { messages } = req.body || {};
  if (!Array.isArray(messages) || !messages.length) return res.status(400).json({ error: 'messages required' });
  const validMessage = (m) => m && ['system', 'user', 'assistant'].includes(m.role) && typeof m.content === 'string';
  if (messages.length > MAX_MESSAGES || !messages.every(validMessage)
      || messages.reduce((n, m) => n + m.content.length, 0) > MAX_TOTAL_CHARS) {
    return res.status(400).json({ error: 'conversation too long or malformed' });
  }

  const supa = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    // This proxies OpenAI using our own API key — without this check anyone on the
    // internet who found the endpoint could burn the office's AI budget for free.
    const { data: userData, error: userErr } = await supa.auth.getUser(token);
    if (userErr || !userData?.user) return res.status(401).json({ error: 'Invalid session' });

    const { data: isPlatformAdmin } = await supa.from('platform_admins').select('id').eq('user_id', userData.user.id).maybeSingle();
    if (!isPlatformAdmin) {
      const { data: member } = await supa.from('office_members').select('office_id, role, ai_enabled').eq('user_id', userData.user.id).maybeSingle();
      if (!member || !(member.role === 'admin' || member.ai_enabled)) {
        return res.status(403).json({ error: 'AI access not enabled for this user' });
      }
      // Plan gating is enforced here as well as in the UI — the UI check alone can be bypassed.
      const { data: office } = await supa.from('offices').select('plan, active, status').eq('id', member.office_id).maybeSingle();
      if (!office || office.active === false || office.status !== 'active' || !AI_PLANS.includes(office.plan)) {
        return res.status(403).json({ error: 'AI Agent is not included in this office plan' });
      }
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({ model, messages }),
    });

    const data = await response.json();

    if (!response.ok) return res.status(response.status).json({ error: data.error?.message || 'OpenAI error' });

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
