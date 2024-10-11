import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// drizzle-kit does not support import.meta.env, so we need to load the .env file manually.
config({ path: "../.env" });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL ?? "",
    authToken: process.env.TURSO_AUTH_TOKEN ?? "",
  },
});
