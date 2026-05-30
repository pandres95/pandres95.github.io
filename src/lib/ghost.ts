import { XMLParser } from 'fast-xml-parser';

export interface GhostPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  tags: string[];
}

const RSS_URL = 'https://blog.pablodorado.com/rss/';

const parser = new XMLParser({
  ignoreAttributes: false,
  isArray: (name) => name === 'item' || name === 'category',
  cdataPropName: '__cdata',
});

function text(val: unknown): string {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && '__cdata' in (val as object))
    return (val as { __cdata: string }).__cdata;
  return String(val);
}

export async function getGhostPosts(limit = 6): Promise<GhostPost[]> {
  try {
    const res = await fetch(RSS_URL);
    if (!res.ok) return [];

    const xml = await res.text();
    const feed = parser.parse(xml);
    const items: unknown[] = feed?.rss?.channel?.item ?? [];

    return items.slice(0, limit).map((item) => {
      const it = item as Record<string, unknown>;
      const categories = (it.category as unknown[]) ?? [];
      return {
        id: text(it.guid) || text(it.link),
        title: text(it.title),
        excerpt: text(it.description),
        date: text(it.pubDate),
        url: text(it.link),
        tags: categories.map((c) => text(c)),
      };
    });
  } catch {
    return [];
  }
}
