import { db } from "../database/database.connection";

async function getGamesDB() {
    return await db.query(`SELECT * FROM games`);
}

async function createGameDB() {
}


export const gameRepository = { createGameDB, getGamesDB };
