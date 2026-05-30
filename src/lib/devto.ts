export interface DevToPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  tag_list: string[];
  published_at: string;
  url: string;
  cover_image: string | null;
}

export async function getDevToPosts(username = 'pandres95', limit = 6): Promise<DevToPost[]> {
  const url = `https://dev.to/api/articles?username=${username}&per_page=${limit}&state=published`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'pablodorado.com/site-builder (+https://pablodorado.com)',
        Accept: 'application/json',
      },
    });
    if (!res.ok) return [];
    return res.json() as Promise<DevToPost[]>;
  } catch (err) {
    console.error('[devto] fetch error:', err);
    return [];
  }
}
