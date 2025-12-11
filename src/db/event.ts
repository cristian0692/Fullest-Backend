import { db } from "./db.ts";
import { DBEvent, eventSchema } from "../../drizzle/schema.ts";
import { DayEvent } from "../../../Shared/types.ts";
export async function findAllEvents() {
  return await db.select().from(eventSchema);
}

export async function insertEvent(event: DayEvent, dayId: string) {
  if (!event.startTime || !event.endTime) {
    console.log("Start or End time not specified!");
    return;
  }
  const backendEvent: DBEvent = {
    eventId: event.id,
    endTime: event.endTime.substring(11, 19), // to get the time only for the event
    startTime: event.startTime.substring(11, 19),
    color: event.color,
    title: event.title,
    description: event.description,
    dayId: dayId,
  };

  return await db.insert(eventSchema).values(backendEvent);
}
