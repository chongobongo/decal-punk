import { id } from "@/db/schemaHelpers";
import { pgTable, text } from "drizzle-orm/pg-core";


export const MaterialsHomePage = pgTable("app_materials_banner", ({
    id,
    header: text(),
    description: text(),
    img: text()
}))