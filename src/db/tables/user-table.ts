import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { created_at, id, updated_at } from "../schemaHelpers";
import { userRoleEnum } from "../schemaDB";

 export const UsersTable = pgTable("users", {
  id,
  clerkUserId: text().notNull().unique(),
  email: text().notNull(),
  name: text().notNull(),
  role: userRoleEnum().notNull().default("user"),
  imageUrl: text(),
  deleted_at: timestamp({ withTimezone: true }),
  created_at,
  updated_at,
})
