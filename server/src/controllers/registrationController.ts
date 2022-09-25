import {Response} from 'express';
import {error, HTTP_CODES, success} from '../assets/helper';
import {AnswerType, RequestWithBody} from '../types';
import nodemailer from 'nodemailer';
import {RegistrationUserBodyEmail} from '../models/registration/registration';
import {createUserDBProxy, getUserByEmailDBProxy} from "../db/db";
import bcrypt from 'bcryptjs';

export const registration = (
    req: RequestWithBody<RegistrationUserBodyEmail>,
    res: Response<AnswerType>
) => {
    const {email} = req.body;

    if (!email || !email.trim()) { // TODO
        res.status(HTTP_CODES.BAD_REQUEST_400).json(error("'email' is empty"));
        return;
    }

    getUserByEmailDBProxy(email)
        .then((data: any) => {
            if (data.length === 0) {
                return res.status(HTTP_CODES.OK_200).json(success(null));
            } else {
                res.status(HTTP_CODES.BAD_REQUEST_400).json(error("Данный email уже зарегестрирован"));
            }
        })
        .catch(error => {
            console.warn({error})
        })
};

export const registrationConfirm = (
    req: RequestWithBody<{code: string}>,
    res: Response<AnswerType | number>
) => {
    const {code} = req.body;

    if (!code || !code.trim()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(error("'code' is empty"));
        return;
    }

    if (code === 'a35y7u') {
        res.status(HTTP_CODES.OK_200).json(success(null));
    } else {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(error('Неверный код'));
    }
};

export const registrationEnd = (
    req: RequestWithBody<{email: string, password: string}>,
    res: Response<AnswerType | number>
) => {
    const {email, password} = req.body;

    if (!email || !email.trim() || !password || !password.trim()) { // TODO
        res.status(HTTP_CODES.BAD_REQUEST_400).json(error("'email' or 'password' is empty"));
        return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    createUserDBProxy(email, hash)
        .then(() => {
            res.status(HTTP_CODES.OK_200).json(success("Пользователь успешно создан"));
        })
        .catch(e => {
            res.status(HTTP_CODES.SERVER_ERROR_500).json(error("Ошибка сервера при создании пользователя"));
            console.log(e);
        })
};
