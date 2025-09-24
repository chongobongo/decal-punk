import { UserRole } from "@/db/schemaDB"

export function canAccessMemberPages({ role }: { role: UserRole | undefined }) {
  return role === "member"
}
