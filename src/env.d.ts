/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GHOST_CONTENT_API_KEY: string;
  readonly GITHUB_TOKEN: string;
  readonly PUBLIC_LASTFM_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
