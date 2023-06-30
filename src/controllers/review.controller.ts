import { Request, Response } from "express";
import httpStatus from "http-status";

async function getGameReviews(req: Request, res: Response){
}

async function postReview(req: Request, res: Response) {}

export const reviewController = { getGameReviews, postReview };
