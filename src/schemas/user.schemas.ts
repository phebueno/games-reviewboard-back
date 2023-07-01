import joi from "joi";
import { User } from "../protocols/user.protocols";

export const signUpSchema = joi.object<User>({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().trim().min(3).required()
})

export const signInSchema = joi.object<UserLogin>({
    email: joi.string().email().required(),
    password: joi.string().trim().min(3).required(),
})

type UserLogin = Omit<User, 'username'>