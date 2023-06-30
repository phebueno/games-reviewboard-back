import { Request, Response } from "express";
import { gameService } from "../services/game.services";
import httpStatus from "http-status";

async function getGames(req: Request, res: Response) {
  const games = await gameService.getGameService();
  res.status(httpStatus.OK).send(games);
}

async function createGame(req: Request, res: Response) {}

export const gameController = { getGames, createGame };
