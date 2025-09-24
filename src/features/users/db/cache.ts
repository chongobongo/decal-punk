"use server"

import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export async function getUserGlobalTag() {
 return getGlobalTag("users")
}

export async function getUserIdTag(id: string) {
  return getIdTag("users", id)
}

export async function revalidateUserCache(id: string) {
   revalidateTag(await getUserGlobalTag())
   revalidateTag(await getUserIdTag(id))
}
