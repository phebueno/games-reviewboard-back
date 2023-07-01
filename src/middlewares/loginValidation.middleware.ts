import bcrypt from "bcrypt";
import { userRepository } from "../repositories/user.repository";
import { NextFunction, Request, Response } from "express";

export async function validateSignUp(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body
    try {

        const emailRepeated = await userRepository.getUserByEmailDB(email);

        if (emailRepeated.rowCount !== 0) return res.status(409).send("Email já cadastrado")

        next();
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function validateSignIn(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body
    try {
        const user = await userRepository.getUserByEmailDB(email);

        if (user.rowCount === 0) return res.status(404).send("Email não encontrado")

        const passwordUser = bcrypt.compareSync(password, user.rows[0].password)
        if (!passwordUser) return res.status(401).send("Senha incorreta")

        res.locals.session = user;
        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}