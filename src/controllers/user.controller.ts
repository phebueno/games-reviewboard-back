import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/user.repository";

async function signUp(req, res) {
  const { username, email, password } = req.body;
  try {
    const hash = bcrypt.hashSync(password, 10);

    await userRepository.insertUserDB(username, email, hash);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function signIn(req, res) {
  try {
    const user = res.locals.session;
    const secretKey = process.env.JWT_SECRET;
    const token = jwt.sign(user.rows[0], secretKey, { expiresIn: "24h" });

    const userData = {
      username: user.rows[0].username,
      img: user.rows[0].image,
    };

    res.status(201).send({ token, userData });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export const userController = { signUp, signIn };
