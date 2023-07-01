import { notFoundErr } from "../errors/errors";
import { CreateGameReview, GameWithReviews } from "../protocols/protocols";
import { reviewRepository } from "../repositories/review.repository";

async function getGameReviewsService(gameId:number):Promise<GameWithReviews>{
    const result = await reviewRepository.getGameReviewsDB(gameId);
    if(!result.rowCount) throw notFoundErr(gameId);
    return result.rows[0];
}

async function postReviewService(newReview:CreateGameReview):Promise<void>{
    const result = await reviewRepository.postReviewDB(newReview);
}

export const reviewService = { getGameReviewsService, postReviewService };
