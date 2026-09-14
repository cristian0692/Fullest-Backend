import { db } from "./db.ts";
import { DBEvent, eventSchema } from "../../drizzle/schema.ts";
import { DayEventDto } from "../types/DayEventDto.ts";
export async function findAllEvents() {
  return await db.select().from(eventSchema);
}

export async function insertEvent(event: DayEventDto, dayId: string) {
  if (!event.startTime || !event.endTime) {
    console.log("Start or End time not specified!");
    return;
  }
  const backendEvent: DBEvent = {
    eventId: event.id,
    endTime: event.endTime, 
    startTime: event.startTime,
    color: event.color,
    title: event.name,
    description: event.description,
    dayId: dayId,
  };

  return await db.insert(eventSchema).values(backendEvent);
}

