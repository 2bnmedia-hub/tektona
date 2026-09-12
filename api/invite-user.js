import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Missing authorization token' });

  const { officeId, name, email, role } = req.body || {};
  if (!officeId || !name || !email || !role) {
    return res.status(400).json({ error: 'officeId, name, email, role are required' });
  }
  if (!['admin', 'arch', 'client', 'employee'].includes(role)) {
    return res.status(400).json({ error: 'invalid role' });
  }

  const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    // Only that specific office's own admin (or the platform owner) may invite into it —
    // without this check any caller who knew/guessed an officeId could add themselves as
    // admin to someone else's office.
    const { data: userData, error: userErr } = await admin.auth.getUser(token);
    if (userErr || !userData?.user) return res.status(401).json({ error: 'Invalid session' });

    const { data: isPlatformAdmin } = await admin.from('platform_admins').select('id').eq('user_id', userData.user.id).maybeSingle();
    if (!isPlatformAdmin) {
      const { data: officeAdmin } = await admin.from('office_members').select('id')
        .eq('user_id', userData.user.id).eq('office_id', officeId).eq('role', 'admin').maybeSingle();
      if (!officeAdmin) return res.status(403).json({ error: 'Not an admin of this office' });
    }

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
