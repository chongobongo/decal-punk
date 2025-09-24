import { id } from "@/db/schemaHelpers";
import { pgTable, text } from "drizzle-orm/pg-core";

export const GalleryHomePage = pgTable("app_gallery_banner", ({
    id,
    header: text(),
    description: text(),
    img: text()
}))