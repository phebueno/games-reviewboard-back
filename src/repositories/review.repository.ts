import { db } from "../database/database.connection";

async function getGameReviewsDB() {
    return await db.query(`SELECT * FROM games`);
}

async function postReviewDB() {
}


export const rewviewRepository = { getGameReviewsDB, postReviewDB };
