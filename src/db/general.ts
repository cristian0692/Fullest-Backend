import { daySchema, userSchema } from "../../drizzle/schema.ts";
import { hashPassword } from "../security/hashing.ts";
import { db } from "./db.ts";

export async function startUp() {
  await db.delete(userSchema);
  await db.delete(daySchema);

  db.insert(userSchema).values([
    {
    userId: "132145",
      email: "123@email.com",
      firstName: "Cristian",
      lastName: "Bolohan",
      password: await hashPassword("1234"),
    },
  ]);

  console.log("Start up complete");
}
