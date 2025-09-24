import { pgEnum } from "drizzle-orm/pg-core"

// Users Roles
export const userRoles = [
    "user",
    "member",
    "admin",
    ] as const
export type UserRole = (typeof userRoles)[number]
export const userRoleEnum = pgEnum("user_role", userRoles)