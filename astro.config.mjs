// @ts-check
import { defineConfig, envField } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true })],
  output: "server",
  experimental: {
    env: {
      schema: {
        TURSO_CONNECTION_URL: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        TURSO_AUTH_TOKEN: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
      },
    },
  },
});
