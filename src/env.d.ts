/// <reference path="../.astro/types.d.ts" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    env: {
      CLOUDFLARE_ACCOUNT_ID: string;
      CLOUDFLARE_DATABASE_ID: string;
      CLOUDFLARE_D1_TOKEN: string;
      CLOUDFLARE_D1_BINDING: string;
      MAP: D1Database;
    };
  }
}

interface ImportMeta {
  readonly env: {
    readonly CLOUDFLARE_ACCOUNT_ID: string;
    readonly CLOUDFLARE_DATABASE_ID: string;
    readonly CLOUDFLARE_D1_TOKEN: string;
    readonly CLOUDFLARE_D1_BINDING: string;
  };
}
