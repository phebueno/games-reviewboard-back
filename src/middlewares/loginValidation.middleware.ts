import bcrypt from "bcrypt";
import { userRepository } from "../repositories/user.repository";

export async function validateSignIn(req, res, next) {
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