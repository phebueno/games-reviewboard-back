import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { validateSignIn } from "../middlewares/loginValidation.middleware";

const userRouter = Router();

userRouter.post("/sign-up", userController.signUp);
userRouter.post("/sign-in", validateSignIn, userController.signIn);

export default userRouter;