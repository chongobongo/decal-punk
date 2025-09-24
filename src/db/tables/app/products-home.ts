import { id } from "@/db/schemaHelpers";
import { pgTable, text } from "drizzle-orm/pg-core";

export const ProductsHomePage = pgTable("app_products_banner", ({
    id,
    title: text(),
    header: text(),
    description: text(),
    img: text()
}))