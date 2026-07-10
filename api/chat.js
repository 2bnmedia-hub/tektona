export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, model = 'gpt-4.1' } = req.body;

  if (!messages?.length) return res.status(400).json({ error: 'messages required' });

  try {
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
