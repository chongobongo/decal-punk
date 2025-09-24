import { id } from "@/db/schemaHelpers"
import { pgTable, text } from "drizzle-orm/pg-core"


export const SplashHomePage = pgTable("app_splash_banner", ({
    id,
    header: text(),
    description: text(),
    link_text: text(),
    tag_line: text(),
    img: text()
}))