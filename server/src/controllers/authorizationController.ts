import {AnswerType, RequestWithBody} from "../types";
import {Response} from "express";
import {error, HTTP_CODES, success} from "../assets/helper";
import {getUserByEmailDBProxy} from "../db/db";
import {AuthorizationUserBodyData} from "../models/authorization/authorization";
import bcrypt from "bcryptjs";

export const authorization = (
    req: RequestWithBody<AuthorizationUserBodyData>,
    res: Response<AnswerType>
) => {
    const {email, password} = req.body;

    if (!email || !email.trim() || !password || !password.trim()) { // TODO
        res.status(HTTP_CODES.BAD_REQUEST_400).json(error("'email' or 'password' is empty"));
        return;
    }

    getUserByEmailDBProxy(email)
        .then((data: any) => {
            if (data.length === 0) {
                return res.status(HTTP_CODES.BAD_REQUEST_400).json(error("Пользователь с такой почтой не найден"));
            }
            if (!bcrypt.compareSync(password, data[0].password)) {
                return res.status(HTTP_CODES.BAD_REQUEST_400).json(error("Неверный пароль"));
            }
            res.status(HTTP_CODES.OK_200).json(success(null));
        })
        .catch(error => {
            console.warn({error})
            res.status(HTTP_CODES.SERVER_ERROR_500).json(error("Ошибка сервера"));
        })
};