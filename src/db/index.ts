import { drizzle } from "drizzle-orm/d1";

export function createDB(env: App.Locals["env"]) {
  const db = drizzle(env.MAP);
  return db;
}
