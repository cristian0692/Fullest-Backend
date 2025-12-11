import { Hono } from "hono";
import type { DayData } from "?/types.ts";
import { insertEvent } from "../db/event.ts";
import { insertDay } from "../db/day.ts";
import { DBDay } from "../../drizzle/schema.ts";
const day = new Hono();

day.post("/day", async (c) => {
  const bodyData: DayData = await c.req.json();

  const day: DBDay = await insertDay(
    bodyData.day,
    bodyData.startTime,
    bodyData.endTime,
  );
  bodyData.events.forEach((event) => {
    insertEvent(event, day.dayId);
  });
  return c.json({
    message: "Successfully processed event",
    receivedData: bodyData,
  });
});

export { day };
