// DB Connectiion
// C:\Users\tyson\OneDrive\Desktop\Cinegraph\cinegraph\src\db\index.ts

import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "./schemaDB"

config({ path: '.env' }); // or .env.local

const connectionString = process.env.DATABASE_URL ||
"postgress://localhost:5432/drizzle";

const client = postgres(connectionString);
export const db = drizzle(client, { schema });