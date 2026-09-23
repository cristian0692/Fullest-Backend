import { Hono } from "hono";
import { sign } from "hono/jwt";
import { getUser } from "../db/user.ts";

const login = new Hono();
export type Credentials = {
  email : string;
  password: string;
}
const JWT_SECRET = Deno.env.get("JWT_SECRET");
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set");
}

login.post(async (c) => {
  const credentials: Credentials = await c.req.json();

  const user = await getUser(credentials);

  const payload = {
    sub: user.userId,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  const token = await sign(payload, JWT_SECRET);

  return c.json({ token });
});

export { login };
