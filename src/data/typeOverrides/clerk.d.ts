import { UserRole } from "drizzle/orm"

export {}

declare global {
    interface CustomJwtSessionClaims {
        dbId?: string
        role?: UserRole
    }

    interface UserPublicMetaData {
        dbId?: string
        role?: UserRole
    }
}