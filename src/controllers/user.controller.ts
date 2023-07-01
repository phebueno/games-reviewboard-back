import { userService } from "../services/user.services";
import { Request, Response } from "express";

async function signUp(req: Request, res: Response) {
  const { username, email, password } = req.body;
  try {
    await userService.signUpService({ username, email, password });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function signIn(req: Request, res: Response) {
  try {
    const user = res.locals.session;
    const userAuth = userService.signInService(user.rows[0]);
    res.status(201).send(userAuth);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export const userController = { signUp, signIn };
