// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  json,
  integer,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `argo_${name}`);

export const projects = createTable(
  "projects",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 64 }).notNull(),
    displayName: varchar("displayName", { length: 32 }).notNull(),
    desc: varchar("desc", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
    iconUrl: varchar("iconUrl", { length: 1024 }),
    bannerUrl: varchar("bannerUrl", { length: 1024 }),
    tags: json("tags").default([]).notNull(),
    owner: varchar("owner", { length: 256 }).notNull(),
    watchers: varchar("watchers", { length: 256 }).default("0").notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const users = createTable(
  "users",
  {
    id: serial("id").primaryKey(),
    username: varchar("name", { length: 64 }).notNull(),
    displayName: varchar("displayName", { length: 32 }).notNull(),
    desc: varchar("desc", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
    iconUrl: varchar("iconUrl", { length: 1024 }),
  },
  (example) => ({
    usernameIndex: index("username_idx").on(example.username),
  }),
);
