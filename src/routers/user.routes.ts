import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { validateSignIn } from "../middlewares/loginValidation.middleware";
import { validateSchema } from "../middlewares/schemaValidation.middleware";
import { signInSchema, signUpSchema } from "../schemas/user.schemas";

const userRouter = Router();

userRouter.post("/sign-up", validateSchema(signUpSchema) ,userController.signUp);
userRouter.post("/sign-in", validateSchema(signInSchema), validateSignIn, userController.signIn);

export default userRouter;