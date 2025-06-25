export default async function handler(req, res) {
  const { tech, status, page, perPage } = req.query;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: "GitHub token not found." });
  }

  const url = `https://api.github.com/search/issues?q=label:%22good%20first%20issue%22+language:${tech}+state:${status}&sort=created&order=desc&per_page=${perPage}&page=${page}`;


  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || "GitHub API error" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch GitHub data." });
  }
}
