import { Request, Response } from "express";
import httpStatus from "http-status";
import { reviewService } from "../services/review.services";

async function getGameReviews(req: Request, res: Response) {
  const gameId = Number(req.params.gameId);
  const gameReviews = await reviewService.getGameReviewsService(gameId);
  res.status(httpStatus.OK).send(gameReviews);
}

async function postReview(req: Request, res: Response) {
  const gameId = Number(req.params.gameId);
  const userId = res.locals.userId;
  await reviewService.postReviewService({ userId, gameId, ...req.body });
  res.status(httpStatus.OK).send("Review postada!");
}

export const reviewController = { getGameReviews, postReview };
