import { id } from "@/db/schemaHelpers";text()
import { pgTable, text } from "drizzle-orm/pg-core";

export const TemplatesHomePage = pgTable("app_templates_banner", ({
    id,
    header: text(),
    description: text(),
    img: text()
}))