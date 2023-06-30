import { Router } from "express";
import { reviewController } from "../controllers/review.controller";

const reviewRouter = Router();

reviewRouter.get("/reviews/:gameId", reviewController.getGameReviews);
reviewRouter.post("/reviews/:gameId", reviewController.postReview);

export default reviewRouter;