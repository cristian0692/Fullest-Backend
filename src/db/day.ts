import { db } from "./db.ts";
import { daySchema, DBDay } from "../../drizzle/schema.ts";
export async function findAllDays() {
  return await db.select().from(daySchema);
}

export async function insertDay(
  day: string,
  endTime: string,
  startTime: string,
): Promise<DBDay> {
  console.log(day);
  const dayObj: DBDay = {
    dayId: crypto.randomUUID(),
    endTime: endTime,
    startTime: startTime,
    userId: "1",
  };
  await db.insert(daySchema).values(dayObj);
  return dayObj;
}
