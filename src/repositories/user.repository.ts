import { db } from "../database/database.connection";

async function insertUserDB(username: string, email: string, password: string) {
  const result = await db.query(
    `
        INSERT INTO "users" ("username", "email", "password")
        VALUES ($1, $2, $3);    
    `,
    [username, email, password]
  );
  return result;
}

export async function getUserByEmailDB(email:string) {
  return await db.query(
    `
        SELECT * FROM users
        WHERE email=$1
    `,
    [email]
  );
}

export const userRepository = { insertUserDB, getUserByEmailDB };
