/// <reference path="../.astro/types.d.ts" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    env: {
      TURSO_CONNECTION_URL: string;
      TURSO_AUTH_TOKEN: string;
    };
  }
}

interface ImportMetaEnv {
  readonly TURSO_CONNECTION_URL: string;
  readonly TURSO_AUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
