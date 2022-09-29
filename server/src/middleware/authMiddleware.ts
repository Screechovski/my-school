import {HTTP_CODES} from '../assets/constants';
import {error} from '../assets/helper';
import {AnswerType} from '../types';
import {Response, Request} from 'express';
import {decodAccessToken} from '../assets/token';

export const authMiddleware = (
    req: Request,
    res: Response<AnswerType>,
    next: any
) => {
    if (req.method === 'OPTIONS') {
        next();
        return;
    }

    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) throw 'token is undefined';

        const decodeData = decodAccessToken(token);
        if (!decodeData) {
            res.status(HTTP_CODES.ACCESS_DENIED).json(error('Токен устарел'));
            return;
        }

        // @ts-ignore
        req.user = decodeData;
        next();
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.ACCESS_DENIED).json(error('У вас нет доступа'));
    }
};
