import { db } from "./db.ts";
import { userSchema } from "../../drizzle/schema.ts";
import { verifyPassword } from "../security/hashing.ts";
import { Credentials } from "../router/login.ts";
import { LoginError } from "../security/errors/LoginError.ts";
import { UserDto } from "../types/UserDto.ts";
import { HashedPassword } from "../security/HashedPassword.ts";
export async function findAllUsers() {
  return await db.select().from(userSchema);
}

export async function getUser({
  email,
  password,
}: Credentials): Promise<UserDto> {
  const user = (await db.select().from(userSchema)).find(
    (user) => user.email == email,
  );

  if (user == undefined) {
    throw new Error("The user with this email does not exist");
  }
  const correctPassword = await verifyPassword(
    HashedPassword.to(user.password),
    password,
  );
  if (correctPassword) {
    return user;
  } else {
    throw new LoginError("Password is incorrect");
  }
}
