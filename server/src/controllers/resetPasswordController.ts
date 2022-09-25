import {AnswerType, RequestWithBody} from '../types';
import {Response} from 'express';
import {changeUserPasswordDBProxy, getUserByEmailDBProxy} from '../db/db';
import {error, HTTP_CODES, success} from '../assets/helper';
import bcrypt from 'bcryptjs';

export const resetPassword = (
    req: RequestWithBody<{email: string}>,
    res: Response<AnswerType | number>
) => {
    const {email} = req.body;

    if (!email || !email.trim()) {
        // TODO
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error("Проверьте правильность заполнения поля 'email'")
        );
    }

    getUserByEmailDBProxy(email)
        .then((data: any) => {
            if (data.length === 0) {
                res.status(HTTP_CODES.BAD_REQUEST_400).json(
                    error('Пользователь с такой почтой не найден')
                );
                return;
            }
            res.status(HTTP_CODES.OK_200).json(
                success(null, 'Сообщение с кодом отправленно на почту')
            );
        })
        .catch((e) => {
            console.warn(e);
            res.status(HTTP_CODES.SERVER_ERROR_500).json(
                error('Ошибка сервера при смене пароля')
            );
        });
};

export const resetPasswordConfirm = (
    req: RequestWithBody<{code: string}>,
    res: Response<AnswerType | number>
) => {
    const {code} = req.body;

    if (!code || !code.trim() || code.length !== 6 || code !== 'a35y7u') {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error("Проверьте правильность заполнения поля 'Код'")
        );
        return;
    }

    res.status(HTTP_CODES.OK_200).json(success(null, 'Код введён верно'));
};

export const resetPasswordEnd = (
    req: RequestWithBody<{email: string; password: string}>,
    res: Response<AnswerType | number>
) => {
    const {email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    getUserByEmailDBProxy(email)
        .then((data: any) => {
            if (data.length === 0) {
                res.status(HTTP_CODES.BAD_REQUEST_400).json(
                    error('Пользователь с такой почтой не найден')
                );
                return;
            }
            if (bcrypt.compareSync(password, data[0].password)) {
                res.status(HTTP_CODES.BAD_REQUEST_400).json(
                    error('Вы вводите актуальный пароль')
                );
                return;
            }
            return changeUserPasswordDBProxy(email, hash);
        })
        .then((data) => {
            res.status(HTTP_CODES.OK_200).json(
                success('Пароль успешно изменён')
            );
        })
        .catch((e) => {
            console.warn(e);
            res.status(HTTP_CODES.SERVER_ERROR_500).json(
                error('Ошибка сервера при смене пароля')
            );
        });
};
