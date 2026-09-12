import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Missing authorization token' });

  const { name, contactName, phone } = req.body || {};
  if (!name || !contactName) {
    return res.status(400).json({ error: 'name and contactName are required' });
  }

  const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    const { data: userData, error: userErr } = await admin.auth.getUser(token);
    if (userErr || !userData?.user) return res.status(401).json({ error: 'Invalid session' });
    const authUser = userData.user;

    // A user can only submit one franchise signup — block anyone already linked to an office or already a platform admin.
    const { data: existingAdmin } = await admin.from('platform_admins').select('id').eq('user_id', authUser.id).maybeSingle();
    if (existingAdmin) return res.status(400).json({ error: 'המשתמש כבר בעל המערכת' });

    const { data: existingMember } = await admin.from('office_members').select('id').eq('user_id', authUser.id).maybeSingle();
    if (existingMember) return res.status(400).json({ error: 'המשתמש כבר משויך למשרד קיים' });

    const { data: office, error: officeErr } = await admin
      .from('offices')
      .insert({
        name,
        status: 'pending',
        contact_email: authUser.email,
        contact_phone: phone || null,
        data: { projects: [], users: [] },
      })
      .select('id')
      .single();
    if (officeErr) return res.status(400).json({ error: officeErr.message });

    const { error: memberErr } = await admin.from('office_members').insert({
      office_id: office.id,
      user_id: authUser.id,
      role: 'admin',
      display_name: contactName,
      ai_enabled: false,
    });
    if (memberErr) {
      await admin.from('offices').delete().eq('id', office.id);
      return res.status(400).json({ error: memberErr.message });
    }

    res.status(200).json({ ok: true, officeId: office.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
