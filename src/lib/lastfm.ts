export interface LastFmTrack {
  name: string;
  artist: { '#text': string };
  album: { '#text': string };
  url: string;
  image: Array<{ '#text': string; size: string }>;
  '@attr'?: { nowplaying?: string };
}

export async function getRecentTrack(
  username: string,
  apiKey: string,
): Promise<LastFmTrack | null> {
  try {
    const url = new URL('https://ws.audioscrobbler.com/2.0/');
    url.searchParams.set('method', 'user.getrecenttracks');
    url.searchParams.set('user', username);
    url.searchParams.set('api_key', apiKey);
    url.searchParams.set('format', 'json');
    url.searchParams.set('limit', '1');

    const res = await fetch(url.toString());
    if (!res.ok) return null;

    const data = await res.json() as {
      recenttracks: { track: LastFmTrack | LastFmTrack[] };
    };
    const tracks = data.recenttracks?.track;
    if (!tracks) return null;
    return Array.isArray(tracks) ? tracks[0] : tracks;
  } catch {
    return null;
  }
}
