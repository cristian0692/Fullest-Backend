import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { daySchema, eventSchema, userSchema } from "../../drizzle/schema.ts";
import {
  daysRelations,
  eventsRelations,
  usersRelations,
} from "../../drizzle/relations.ts";

const { Pool } = pg;

export const db = drizzle({
  client: new Pool({
    connectionString: Deno.env.get("DATABASE_URL"),
  }),
  schema: {
    userSchema,
    eventSchema,
    daySchema,
    usersRelations,
    eventsRelations,
    daysRelations,
  },
});
