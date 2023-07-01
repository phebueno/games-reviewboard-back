import { Router } from "express";
import { reviewController } from "../controllers/review.controller";
import { authValidation } from "../middlewares/authValidation.middleware";
import { validateSchema } from "../middlewares/schemaValidation.middleware";
import { reviewSchema } from "../schemas/review.schemas";

const reviewRouter = Router();

reviewRouter.get("/reviews/:gameId", reviewController.getGameReviews);
reviewRouter.post("/reviews/:gameId", authValidation, validateSchema(reviewSchema), reviewController.postReview);

export default reviewRouter;