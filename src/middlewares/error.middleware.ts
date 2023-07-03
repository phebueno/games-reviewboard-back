import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  if (error.type === "NotFoundErr")
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  if (error.type === "ConflictErr")
    return res.status(httpStatus.CONFLICT).send(error.message);
  if(error.type=== "UnauthorizedRev")
    return res.status(httpStatus.UNAUTHORIZED).send(error.message);

  //Contraint Errors
  if (error.constraint === "reviewuniq") {
    return res
      .status(httpStatus.CONFLICT)
      .send("Você já postou uma review deste jogo!");
  }
  if (error.constraint === "reviews_fk1") {
    return res.status(httpStatus.NOT_FOUND).send("Jogo não encontrado!");
  }

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send("Desculpe, algo deu errado.");
}
