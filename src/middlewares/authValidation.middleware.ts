import { tokenToUser } from "../utils/tokenToUser";

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  try {
    const user = tokenToUser(token);
    res.locals.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .send("Seu token de verificação expirou. Realize o login novamente.");
    } else return res.status(500).send(error.message);
  }
}
