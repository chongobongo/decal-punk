import { id } from "@/db/schemaHelpers";
import { pgTable, text } from "drizzle-orm/pg-core";


export const TestimonialsHomePage = pgTable("app_testimonials_banner", ({
    id,
    title: text(),
    header: text(),
    description: text(),
    img: text()
}))