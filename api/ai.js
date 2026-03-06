export default async function handler(req, res) {
  const { page, perPage, search } = req.query;

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: "token is not found" });
  }

  const baseQuery = search ? `${search}+ai` : "ai";
  const ai = `https://api.github.com/search/repositories?q=${encodeURIComponent(baseQuery)}+stars:%3E10&sort=updated&order=desc&per_page=${perPage}&page=${page}`;

  try {
    const response = await fetch(ai, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: data.message || "Github API error" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to fetch" });
  }
}
