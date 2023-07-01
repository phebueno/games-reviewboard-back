import { User } from "../protocols/user.protocols";
import bcrypt from "bcrypt";
import jwt, { Jwt } from "jsonwebtoken";
import { userRepository } from "../repositories/user.repository";
import { QueryResult } from "pg";

async function signUpService({
  username,
  email,
  password,
}: User): Promise<QueryResult> {
  const hash = bcrypt.hashSync(password, 10);
  return await userRepository.insertUserDB(username, email, hash);
}

function signInService(user: UserWithId<User>): UserAuth {
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(user, secretKey, { expiresIn: "24h" });
  const userData = {
    username: user.username,
  };

  return { token, userData };
}

type UserWithId<T> = Partial<T> & { id: number };

type UserAuth = {
  token: string;
  userData: {
    username: string;
  };
};

export const userService = { signUpService, signInService };
