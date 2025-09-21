export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // إذا كان البودي غير محلول نقرأه يدويًا
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { q, source, target, format } = body;

    const response = await fetch("https://translate.argosopentech.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q, source, target, format }),
    });

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Translation Proxy Error:", error.message);
    res.status(500).json({ error: "Translation failed" });
  }
}
