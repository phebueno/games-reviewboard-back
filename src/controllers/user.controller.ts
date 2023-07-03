import { userService } from "../services/user.services";
import { Request, Response } from "express";

async function signUp(req: Request, res: Response) {
  const { username, email, password } = req.body;
  await userService.signUpService({ username, email, password });
  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const user = res.locals.session;
  const userAuth = userService.signInService(user.rows[0]);
  res.status(201).send(userAuth);
}

export const userController = { signUp, signIn };
