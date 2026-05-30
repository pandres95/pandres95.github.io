export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
}

const GQL_PINNED = `
  query($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            primaryLanguage { name }
            repositoryTopics(first: 5) { nodes { topic { name } } }
            updatedAt
          }
        }
      }
    }
  }
`;

export async function getPinnedRepos(username = 'pandres95'): Promise<PinnedRepo[]> {
  const token = import.meta.env.GITHUB_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'pablodorado.com/site-builder (+https://pablodorado.com)',
      },
      body: JSON.stringify({ query: GQL_PINNED, variables: { login: username } }),
    });

    if (!res.ok) return [];

    const { data } = await res.json() as {
      data: {
        user: {
          pinnedItems: {
            nodes: Array<{
              name: string;
              description: string | null;
              url: string;
              stargazerCount: number;
              primaryLanguage: { name: string } | null;
              repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
              updatedAt: string;
            }>;
          };
        };
      };
    };

    return data.user.pinnedItems.nodes.filter(Boolean).map((r) => ({
      name: r.name,
      description: r.description,
      url: r.url,
      stars: r.stargazerCount,
      language: r.primaryLanguage?.name ?? null,
      topics: r.repositoryTopics.nodes.map((n) => n.topic.name),
      updatedAt: r.updatedAt,
    }));
  } catch {
    return [];
  }
}

export async function getGitHubRepos(username = 'pandres95', limit = 6): Promise<GitHubRepo[]> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'pablodorado.com/site-builder (+https://pablodorado.com)',
    };
    const token = import.meta.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit * 2}&type=public`,
      { headers },
    );
    if (!res.ok) return [];

    const repos = await res.json() as GitHubRepo[];
    return repos.filter((r) => !r.fork).slice(0, limit);
  } catch {
    return [];
  }
}
