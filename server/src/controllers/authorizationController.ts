import {AnswerType, RequestWithBody} from '../types';
import {Response} from 'express';
import {Cleaner, error, success, Validation} from '../assets/helper';
import {getUserByEmailDBProxy, setUserTokenDBProxy} from '../db/db';
import {AuthorizationUserBodyData} from '../models/authorization/authorization';
import bcrypt from 'bcryptjs';
import {HTTP_CODES} from '../assets/constants';
import {validationResult} from 'express-validator';
import {generateTokens} from '../assets/token';

export const authorization = async (
    req: RequestWithBody<AuthorizationUserBodyData>,
    res: Response<AnswerType>
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error('Ошибка авторизации', errors)
        );
        return;
    }

    try {
        const bodyEmail = req.body.email;
        const bodyPassword = req.body.password;
        const dbResponce: any = await getUserByEmailDBProxy(bodyEmail);

        if (dbResponce.length === 0) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error('Пользователь с такой почтой не найден')
            );
            return;
        }
        const {id, role, email, active, password} = dbResponce[0];

        if (!bcrypt.compareSync(bodyPassword, password)) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error('Неверный пароль')
            );
            return;
        }

        const {accessToken, refreshToken} = generateTokens({
            id,
            role,
            email,
            active: !!active
        });
        await setUserTokenDBProxy(id, refreshToken);

        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        });
        res.status(HTTP_CODES.OK_200).json(success({accessToken}));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
