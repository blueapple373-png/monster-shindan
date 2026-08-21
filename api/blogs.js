export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.MICROCMS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "MICROCMS_API_KEY is not configured",
    });
  }

  const { id } = req.query;

  if (
    id &&
    (Array.isArray(id) || !/^[A-Za-z0-9_-]+$/.test(id))
  ) {
    return res.status(400).json({
      error: "Invalid blog ID",
    });
  }

  const microCmsUrl = id
    ? `https://minami-mindlab-blog.microcms.io/api/v1/blogs/${encodeURIComponent(id)}`
    : "https://minami-mindlab-blog.microcms.io/api/v1/blogs?orders=-publishedAt&limit=20";

  try {
    const response = await fetch(microCmsUrl, {
      headers: {
        "X-MICROCMS-API-KEY": apiKey,
      },
    });

    if (response.status === 404 && id) {
      return res.status(404).json({
        error: "Blog post not found",
      });
    }

    if (!response.ok) {
      console.error("microCMS error:", response.status);

      return res.status(502).json({
        error: "Failed to fetch blog content",
      });
    }

    const data = await response.json();

    res.setHeader(
      "Cache-Control",
      "s-maxage=60, stale-while-revalidate=300"
    );

    return res.status(200).json(data);
  } catch (error) {
    console.error("Blog API error:", error);

    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
