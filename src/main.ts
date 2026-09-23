import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { user } from "./router/user.ts";
import { day } from "./router/day.ts";
import { login } from "./router/login.ts";
import { startUp } from "./db/general.ts";

const api = new Hono();

api.use("*", logger());
api.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
api.get("/health", (c) => c.text("Health okay!"));
api.route("/api", user);
api.route("/api",day);
api.route("/login", login);
api.notFound((c) => c.json({ message: "Not Found" }, 404));

Deno.serve({ port: 8123 }, api.fetch);

startUp();
