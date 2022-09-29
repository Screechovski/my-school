import {AnswerType, RequestWithBody} from '../types';
import {Response} from 'express';
import {changeUserPasswordDBProxy, getUserByEmailDBProxy} from '../db/db';
import {error, success, Validation} from '../assets/helper';
import bcrypt from 'bcryptjs';
import {HTTP_CODES} from '../assets/constants';

export const resetPassword = async (
    req: RequestWithBody<{email: string}>,
    res: Response<AnswerType | number>
) => {
    const email = req.body.email.trim();

    if (!Validation.email(email)) {
        res.sendStatus(HTTP_CODES.BAD_REQUEST_400);
        return;
    }

    try {
        const DBResponce: any = await getUserByEmailDBProxy(email);

        if (DBResponce.length === 0) {
            res.sendStatus(HTTP_CODES.BAD_REQUEST_400);
            return;
        }
        res.status(HTTP_CODES.OK_200).json(
            success(null)
        );
    } catch (e) {
        console.warn(e);
        res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
    }
};

export const resetPasswordConfirm = async (
    req: RequestWithBody<{code: string}>,
    res: Response<AnswerType | number>
) => {
    const code = req.body.code.trim();

    if (!Validation.code(code)) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(error('Проверьте поле code'));
        return;
    }
    if (code !== 'a35y7u') {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(error('Неверный код'));
        return;
    }

    res.status(HTTP_CODES.OK_200).json(success(null, 'Код введён верно'));
};

export const resetPasswordEnd = async (
    req: RequestWithBody<{email: string; password: string}>,
    res: Response<AnswerType>
) => {
    const email = req.body.email.trim();

    if (!Validation.email(email)) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error("Проверьте правильность заполнения поля 'email'")
        );
        return;
    }

    try {
        const DBResponce: any = await getUserByEmailDBProxy(email);
        const password = req.body.password.trim();

        if (DBResponce.length === 0) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error('Пользователь с такой почтой не найден')
            );
            return;
        }
        if (bcrypt.compareSync(password, DBResponce[0].password)) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error('Вы вводите актуальный пароль')
            );
            return;
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        await changeUserPasswordDBProxy(email, hash);

        res.status(HTTP_CODES.OK_200).json(success('Пароль успешно изменён'));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
