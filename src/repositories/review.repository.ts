import { db } from "../database/database.connection";
import { CreateGameReview } from "../protocols/review.protocols";

async function getGameReviewsDB(gameId: number) {
  return await db.query(
    `SELECT
        g.id,
        g.game,
        g.developer,            
        c.category,
        (SELECT AVG(score) FROM reviews WHERE "gameId"=$1)::int as "meanScore",
        COALESCE((SELECT json_agg(row_to_json("reviews")) FROM
                (SELECT u.username, r.*
                    FROM reviews r
                    LEFT JOIN games g ON r."gameId" = g.id
                    LEFT JOIN users u ON r."userId" = u.id
                    WHERE r."gameId" = $1
                    GROUP BY r.id, u.username
                    ORDER BY r."createdAt" DESC) "reviews"), '[]'::json) as reviews
                        FROM
                            games g
                            LEFT JOIN categories c ON c.id = g."categoryId"
                            WHERE g.id = $1;
    `,[gameId]);
}

async function postReviewDB(newReview: CreateGameReview) {
  const { userId, gameId, revDescription, score } = newReview;
  return await db.query(
    `INSERT INTO reviews ("userId","gameId","revDescription",score) VALUES ($1,$2,$3,$4)`,
    [userId, gameId, revDescription, score]
  );
}

async function deleteReviewDB(userId:number, gameId:number){
  return await db.query(
    `DELETE FROM reviews WHERE "userId"=$1 AND "gameId"=$2`,
    [userId, gameId]
  );
}

export const reviewRepository = { getGameReviewsDB, postReviewDB, deleteReviewDB };
