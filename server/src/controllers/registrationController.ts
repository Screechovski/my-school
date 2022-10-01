import {Response} from 'express';
import {error, success} from '../assets/helper';
import {AnswerType, RequestWithBody} from '../types';
import bcrypt from 'bcryptjs';
import {HTTP_CODES, VALIDATION_RULES} from '../assets/constants';
import {validationResult} from 'express-validator';
import {generateTokens} from '../assets/token';
import {v1} from 'uuid';
import {
    createUserDBProxy,
    getUserByEmailDBProxy,
    getUserByIdDBProxy,
    setUserTokenDBProxy
} from '../db/modules/users';
import { RegistrationUserBodyEmail } from '../models/trash';

class CurrentRegistrationUsers {
    users: any = {};
    add(email: string, id: string) {
        if (email in this.users) throw Error('email already exist');
        const code = v1().slice(0, VALIDATION_RULES.code.length);
        this.users[email] = {id, code};
        setTimeout(() => {
            if (this.users[email]) {
                delete this.users[email];
            }
        }, 1000 * 60 * 5);
        return code;
    }
    isValid(email: string, id: string, code: string) {
        if (!this.users[email]) {
            return false;
        }
        if (this.users[email].id !== id) {
            return false;
        }
        if (this.users[email].code !== code) {
            return false;
        }
        return true;
    }
    clean(email: string) {
        if (!!this.users[email]) {
            delete this.users[email];
        }
    }
}

const currentRegistrationUsers = new CurrentRegistrationUsers();

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
            const code = currentRegistrationUsers.add(
                email,
                `${req.ip}_${req.get('User-Agent')}`
            );
            console.log(code); // for prove account
            // TODO send code to email
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
    req: RequestWithBody<{code: string; email: string}>,
    res: Response<AnswerType>
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error('Ошибка при регистрации', errors)
        );
        return;
    }
    const email = req.body.email;
    const code = req.body.code;
    if (
        currentRegistrationUsers.isValid(
            email,
            `${req.ip}_${req.get('User-Agent')}`,
            code
        )
    ) {
        res.status(HTTP_CODES.OK_200).json(success(null));
        return;
    }
    res.status(HTTP_CODES.BAD_REQUEST_400).json(
        error(
            'Неверный код или вы сменили устройство. Начните регистрацию заново'
        )
    );
};

export const registrationEnd = async (
    req: RequestWithBody<{email: string; code: string; password: string}>,
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
        const bodyCode = req.body.code;
        const bodyPassword = req.body.password;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(bodyPassword, salt);

        if (
            !currentRegistrationUsers.isValid(
                bodyEmail,
                `${req.ip}_${req.get('User-Agent')}`,
                bodyCode
            )
        ) {
            currentRegistrationUsers.clean(bodyEmail);
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error(
                    'Неверный код или вы сменили устройство. Начните регистрацию заново'
                )
            );
            return;
        }
        currentRegistrationUsers.clean(bodyEmail);

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
