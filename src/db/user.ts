import { db } from "./db.ts";
import { userSchema } from "../../drizzle/schema.ts";
export async function findAllUsers() {
  return await db.select().from(userSchema);
}
