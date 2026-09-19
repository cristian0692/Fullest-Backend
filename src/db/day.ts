import { db } from "./db.ts";
import { daySchema, DBDay } from "../../drizzle/schema.ts";
export async function findAllDays() {
  return await db.select().from(daySchema);
}

export async function insertDay(
  day: Date,
  startTime: string,
  endTime: string,
): Promise<DBDay> {

  const dayObj: DBDay = {
    dayId: crypto.randomUUID(),
    date: day.toISOString(),
    endTime: endTime,
    startTime: startTime,
    userId: "1",
  };
  await db.insert(daySchema).values(dayObj);
  return  dayObj;
}
