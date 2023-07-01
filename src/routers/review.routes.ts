import { Router } from "express";
import { reviewController } from "../controllers/review.controller";
import { authValidation } from "../middlewares/authValidation.middleware";

const reviewRouter = Router();

reviewRouter.get("/reviews/:gameId", reviewController.getGameReviews);
reviewRouter.post("/reviews/:gameId", authValidation, reviewController.postReview);

export default reviewRouter;