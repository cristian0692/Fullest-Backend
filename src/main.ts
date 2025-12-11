import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { user } from "./router/user.ts";
import { day } from "./router/day.ts";

const api = new Hono();
api.use("*", logger());
api.use("/api/*", cors());
api.get("/health", (c) => c.text("Health okay!"));
api.route("/api", user);
api.route("/api",day);
api.notFound((c) => c.json({ message: "Not Found" }, 404));

Deno.serve(api.fetch);
