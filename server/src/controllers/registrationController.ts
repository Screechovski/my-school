import {Response} from 'express';
import {error, success} from '../assets/helper';
import {AnswerType, RequestWithBody} from '../types';
import {RegistrationUserBodyEmail} from '../models/registration/registration';
import {
    createUserDBProxy,
    getUserByEmailDBProxy,
    getUserByIdDBProxy,
    setUserTokenDBProxy
} from '../db/db';
import bcrypt from 'bcryptjs';
import {HTTP_CODES} from '../assets/constants';
import {validationResult} from 'express-validator';
import {generateTokens} from '../assets/token';

export const registration = async (
    req: RequestWithBody<RegistrationUserBodyEmail>,
    res: Response<AnswerType>
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error('Ошибка при регистрации', errors)
        );
        return;
    }
    try {
        const email = req.body.email;
        const DBResponce: any = await getUserByEmailDBProxy(email);

        if (DBResponce.length === 0) {
            res.status(HTTP_CODES.OK_200).json(success(null));
            return;
        }
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error('Данный email уже зарегестрирован')
        );
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const registrationConfirm = (
    req: RequestWithBody<{code: string}>,
    res: Response<AnswerType>
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error('Ошибка при регистрации', errors)
        );
        return;
    }
    res.status(HTTP_CODES.OK_200).json(success(null));
};

export const registrationEnd = async (
    req: RequestWithBody<{email: string; password: string}>,
    res: Response<AnswerType>
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error('Ошибка при регистрации', errors)
        );
        return;
    }
    try {
        const bodyEmail = req.body.email;
        const bodyPassword = req.body.password;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(bodyPassword, salt);

        const {insertId: createdUserId}: any = await createUserDBProxy(
            bodyEmail,
            hash
        );
        const [{id, role, email, active}]: any = await getUserByIdDBProxy(
            createdUserId
        );
        const {accessToken, refreshToken} = generateTokens({
            id,
            role,
            email,
            active: !!active
        });
        await setUserTokenDBProxy(createdUserId, refreshToken);

        res.cookie('refreshToken', refreshToken, {maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true});
        res.status(HTTP_CODES.OK_200).json(success({ accessToken }));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
