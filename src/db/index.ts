import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export function createDB(env: App.Locals["env"]) {
  console.log(env);
  const client = createClient({
    url: env.TURSO_CONNECTION_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  });

  return drizzle(client);
}
