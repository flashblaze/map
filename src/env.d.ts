/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly TURSO_CONNECTION_URL: string;
  readonly TURSO_AUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
