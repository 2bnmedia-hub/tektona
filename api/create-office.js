import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Missing authorization token' });

  const { name, adminName, adminEmail } = req.body || {};
  if (!name || !adminName || !adminEmail) {
    return res.status(400).json({ error: 'name, adminName, adminEmail are required' });
  }

  const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    // Verify the caller is a real platform admin before doing anything privileged.
    const { data: userData, error: userErr } = await admin.auth.getUser(token);
    if (userErr || !userData?.user) return res.status(401).json({ error: 'Invalid session' });

    const { data: isAdmin, error: adminErr } = await admin
      .from('platform_admins')
      .select('id')
      .eq('user_id', userData.user.id)
      .maybeSingle();
    if (adminErr) return res.status(500).json({ error: adminErr.message });
    if (!isAdmin) return res.status(403).json({ error: 'Not a platform admin' });

    // Invite first — it's the step most likely to fail (invalid/undeliverable email),
    // and it's cheap to leave nothing behind if it does.
    const { data: invited, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(adminEmail);
    if (inviteErr) return res.status(400).json({ error: inviteErr.message });

    const { data: office, error: officeErr } = await admin
      .from('offices')
      .insert({ name, data: { projects: [], users: [] } })
      .select('id')
      .single();
    if (officeErr) {
      await admin.auth.admin.deleteUser(invited.user.id);
      return res.status(400).json({ error: officeErr.message });
    }

    const { error: memberErr } = await admin.from('office_members').insert({
      office_id: office.id,
      user_id: invited.user.id,
      role: 'admin',
      display_name: adminName,
      ai_enabled: false,
    });
    if (memberErr) {
      await admin.from('offices').delete().eq('id', office.id);
      await admin.auth.admin.deleteUser(invited.user.id);
      return res.status(400).json({ error: memberErr.message });
    }

    res.status(200).json({ ok: true, officeId: office.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
