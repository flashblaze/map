/// <reference path="../.astro/types.d.ts" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    env: {
      TURSO_CONNECTION_URL: string;
      TURSO_AUTH_TOKEN: string;
      CLOUDFLARE_ACCOUNT_ID: string;
      CLOUDFLARE_DATABASE_ID: string;
      CLOUDFLARE_D1_TOKEN: string;
    };
  }
}

interface ImportMeta {
  readonly env: {
    readonly TURSO_CONNECTION_URL: string;
    readonly TURSO_AUTH_TOKEN: string;
    readonly CLOUDFLARE_ACCOUNT_ID: string;
    readonly CLOUDFLARE_DATABASE_ID: string;
    readonly CLOUDFLARE_D1_TOKEN: string;
  };
}
