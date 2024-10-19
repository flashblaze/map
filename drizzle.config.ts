import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// drizzle-kit does not support import.meta.env, so we need to load the .env file manually.
config({ path: "../.env" });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
    // url: process.env.TURSO_CONNECTION_URL ?? "",
    // authToken: process.env.TURSO_AUTH_TOKEN ?? "",
  },
});
