import { Hono } from "hono";
const event = new Hono();

event.post("/event", async (c) => {
  const bodyData = await c.req.json();
  return c.json({
    message: "Successfully processed event",
    receivedData: bodyData,
  });
});

export { event };
