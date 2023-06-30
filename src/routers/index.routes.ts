import { Router } from "express";
import gameRouter from "./game.routes";
import reviewRouter from "./review.routes";
import userRouter from "./user.routes";

const router = Router();

router.use(userRouter);
router.use(gameRouter);
router.use(reviewRouter);

export default router;
