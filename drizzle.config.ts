import { defineConfig } from "drizzle-kit";


export default defineConfig({
    out: './drizzle',
    schema: './src/drizzle/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: Deno.env.get("DATABASE_URL") as string
    }
});