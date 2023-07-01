import { Request, Response } from "express";
import httpStatus from "http-status";
import { reviewService } from "../services/review.services";

async function getGameReviews(req: Request, res: Response) {
  try {
    const gameId = Number(req.params.gameId);
    const gameReviews = await reviewService.getGameReviewsService(gameId);
    res.status(httpStatus.OK).send(gameReviews);
  } catch (error) {
    if ((error.type = "NotFoundErr"))
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    res.status(500).send(error.message);
  }
}

async function postReview(req: Request, res: Response) {
  try {
    const gameId = Number(req.params.gameId);
    const userId = res.locals.userId;
    await reviewService.postReviewService({ userId, gameId, ...req.body });
    res.status(httpStatus.OK).send("Review postada!");
  } catch (error) {
    console.log(error);
    if (error.constraint === "reviewuniq") {
      return res
        .status(httpStatus.CONFLICT)
        .send("Você já postou uma review deste jogo!");
    }
    if (error.constraint === "reviews_fk1") {
      return res.status(httpStatus.NOT_FOUND).send("Jogo não encontrado!");
    }
    res.status(500).send(error.message);
  }
}

export const reviewController = { getGameReviews, postReview };
