import { NextFunction, Request, Response } from "express";
import { tokenToUser } from "../utils/tokenToUser";

export async function authValidation(req:Request, res:Response, next:NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  try {
    const id = tokenToUser(token);
    res.locals.userId= id;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .send("Seu token de verificação expirou. Realize o login novamente.");
    } else return res.status(500).send(error.message);
  }
}