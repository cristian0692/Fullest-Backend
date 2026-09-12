import { Hono } from "hono";
import { insertEvent } from "../db/event.ts";
import { insertDay } from "../db/day.ts";
import { DBDay } from "../../drizzle/schema.ts";
import { Day } from "../types/Day.ts";
const day = new Hono();

day.post("/day", async (c) => {
  const day: Day = await c.req.json();

  const response: DBDay = await insertDay(
    day.date,
    day.startTime,
    day.endTime    
  );
  day.events.forEach((event) => {
    insertEvent(event, response.dayId);
  });
  return c.json({
    message: "Successfully processed event",
    receivedData: response,
  });
});

export { day };
