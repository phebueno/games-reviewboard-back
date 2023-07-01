import joi from "joi";
import { CreateGameReview } from "../protocols/review.protocols";

export const reviewSchema = joi.object<CreateGameReviewRequest>({
    revDescription: joi.string().allow('').optional(),
    score: joi.number().integer().min(0).max(100).required()
});

type CreateGameReviewRequest=Pick<CreateGameReview, 'revDescription' | 'score'>