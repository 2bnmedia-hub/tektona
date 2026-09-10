import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { officeId, name, email, role } = req.body || {};
  if (!officeId || !name || !email || !role) {
    return res.status(400).json({ error: 'officeId, name, email, role are required' });
  }
  if (!['admin', 'arch', 'client'].includes(role)) {
    return res.status(400).json({ error: 'invalid role' });
  }

  const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    const { data: invited, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(email);
    if (inviteErr) return res.status(400).json({ error: inviteErr.message });

    const { error: memberErr } = await admin.from('office_members').insert({
      office_id: officeId,
      user_id: invited.user.id,
      role,
      display_name: name,
      ai_enabled: false,
    });
    if (memberErr) return res.status(400).json({ error: memberErr.message });

    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
