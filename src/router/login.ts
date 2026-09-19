import { Hono } from "hono";
import { sign } from "hono/jwt";

const login = new Hono();

const JWT_SECRET = Deno.env.get("JWT_SECRET");
if(!JWT_SECRET){
  throw new Error("JWT_SECRET is not set");
} 


login.post(async (c) => {
    const payload = {
        sub: "user_123",
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };

    const token = await sign(payload, JWT_SECRET);

    return c.json({ token });
});

export {login};