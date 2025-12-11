import { Hono } from "hono";
import { DBEvent, eventSchema } from "../../drizzle/schema.ts";
import { db } from "../db/db.ts";
const event = new Hono();

event.post("/event", async (c) => {
  const bodyData = await c.req.json();
  return c.json({
    message: "Successfully processed event",
    receivedData: bodyData,
  });
});

export { event };
