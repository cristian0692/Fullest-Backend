import argon2 from "argon2";
export async function hashPassword(password: string): Promise<string> {
  try {
    // Hash the password using Argon2
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (err) {
    console.error("Hashing failed:", err);
    throw err;
  }
}
export async function verifyPassword(
  hashedPassword: string,
  password: string,
): Promise<boolean> {
  try {
    // Verify the password against the hash
    return await argon2.verify(hashedPassword, password);
  } catch (err) {
    console.error("Verification failed:", err);
    throw err;
  }
}
