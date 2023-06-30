import { Router } from "express";
import { gameController } from "../controllers/game.controller";

const gameRouter = Router();

gameRouter.get("/games", gameController.getGames);
gameRouter.post("/games", gameController.createGame);

export default gameRouter;
