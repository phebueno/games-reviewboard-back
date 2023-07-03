import { notFoundErr, unauthorizedReviewerErr } from "../errors/errors";
import { CreateGameReview, GameWithReviews } from "../protocols/review.protocols";
import { reviewRepository } from "../repositories/review.repository";

async function getGameReviewsService(gameId:number):Promise<GameWithReviews>{
    const result = await reviewRepository.getGameReviewsDB(gameId);
    if(!result.rowCount) throw notFoundErr(gameId);
    return result.rows[0];
}

async function postReviewService(newReview:CreateGameReview):Promise<void>{
    await reviewRepository.postReviewDB(newReview);
}

async function deleteReviewService(userId:number, gameId:number):Promise<void>{
    const result = await reviewRepository.deleteReviewDB(userId, gameId);
    if(!result.rowCount){
        await getGameReviewsService(gameId); //return not found if game doesnt exist
        throw unauthorizedReviewerErr(gameId);
    }
}

export const reviewService = { getGameReviewsService, postReviewService, deleteReviewService };
