import { defineConfig, envField } from "astro/config";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true })],
  output: "server",
  experimental: {
    env: {
      schema: {
        CLOUDFLARE_ACCOUNT_ID: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        CLOUDFLARE_DATABASE_ID: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        CLOUDFLARE_D1_TOKEN: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        CLOUDFLARE_D1_BINDING: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
      },
    },
  },
  adapter: cloudflare(),
  site: "https://map.flashblaze.dev",
});
