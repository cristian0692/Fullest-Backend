import { Hono } from "hono";
import { insertEvent } from "../db/event.ts";
import { findAllDays, insertDay } from "../db/day.ts";
import { DBDay } from "../../drizzle/schema.ts";
import { Day } from "../types/Day.ts";
const day = new Hono();

day.post("/day", async (c) => {
  const day: Day = await c.req.json();

  const response: DBDay = await insertDay(
    new Date(),
    day.startTime,
    day.endTime    
  );
  day.events.forEach(async (event) => {
    await insertEvent(event, response.dayId);
  });
  return c.json({
    message: "Successfully processed event",
    receivedData: response,
  });
});

day.get("/day", async (c) => {

  const response = await findAllDays();
  return c.json({
    message:"Sucesfully accessed url",
    receivedData: response
  });
})
export { day };
