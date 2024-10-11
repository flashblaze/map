import { sql } from "drizzle-orm";
import {
  index,
  integer,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const locationTable = sqliteTable(
  "location",
  {
    id: integer("id").primaryKey(),
    createdAt: text("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    ),
    latitude: real("latitude").notNull(),
    longitude: real("longitude").notNull(),
    city: text("city"),
    region: text("region"),
    regionCode: text("region_code"),
    country: text("country"),
    hash: text("hash").notNull(),
    count: integer("count").notNull().default(1),
  },
  (table) => ({
    latLongIndex: index("lat_long_index").on(table.latitude, table.longitude),
  })
);

export type InsertLocation = typeof locationTable.$inferInsert;
export type SelectLocation = typeof locationTable.$inferSelect;
