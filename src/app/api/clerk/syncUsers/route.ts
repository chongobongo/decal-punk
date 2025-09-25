import { insertUser } from "@/features/users/db/users"
import { syncClerkUserMetadata } from "@/services/clerk"
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const user = await currentUser()

const isValidRole = (role: unknown): role is "user" | "member" | "admin" => {
  return typeof role === "string" && ["user", "member", "admin"].includes(role);
};

  if (user == null) return new Response("User not found", { status: 500 })
  if (user.fullName == null) {
    return new Response("User name missing", { status: 500 })
  }
  if (user.primaryEmailAddress?.emailAddress == null) {
    return new Response("User email missing", { status: 500 })
  }

  const dbUser = await insertUser({
    clerkUserId: user.id,
    name: user.fullName,
    email: user.primaryEmailAddress.emailAddress,
    imageUrl: user.imageUrl,
    role: isValidRole(user.publicMetadata.role) ? user.publicMetadata.role : "user",
  })

  await syncClerkUserMetadata(dbUser)

  await new Promise(res => setTimeout(res, 100))

  return NextResponse.redirect(request.headers.get("referer") ?? "/")
}
