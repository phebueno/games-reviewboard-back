import { db } from "../database/database.connection";

async function insertUserDB(username, email, password) {
  const result = await db.query(
    `
        INSERT INTO "users" ("username", "email", "password")
        VALUES ($1, $2, $3);    
    `,
    [username, email, password]
  );
  return result;
}

export async function getUserByEmailDB(email) {
  return await db.query(
    `
        SELECT * FROM users
        WHERE email=$1
    `,
    [email]
  );
}

export const userRepository = { insertUserDB, getUserByEmailDB };
