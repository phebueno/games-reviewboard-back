import jwt from "jsonwebtoken";

export function tokenToUser(token){
    const secretKey = process.env.JWT_SECRET;
    const {id} = jwt.verify(token, secretKey) as JWTPayload;
    return id;
}

type JWTPayload = {
    id: number;
  };