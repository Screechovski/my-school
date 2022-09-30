import {Response} from 'express';
import {AnswerType, RequestEmpty} from '../types';
import {getUserByTokenDBProxy, setUserTokenDBProxy} from '../db/db';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {decodRefreshToken, generateTokens} from '../assets/token';

export const refresh = async (req: RequestEmpty, res: Response<AnswerType>) => {
    try {
        const {refreshToken} = req.cookies;
        const decodedRefreshToken = decodRefreshToken(refreshToken);

        if (!decodedRefreshToken) {
            res.clearCookie('refreshToken');
            res.status(HTTP_CODES.ACCESS_DENIED_403).json(
                error('Токен устарел, необходима авторизация')
            );
            return;
        }
        const DBResponce: any = await getUserByTokenDBProxy(refreshToken);

        if (DBResponce.length === 0) {
            res.clearCookie('refreshToken');
            res.status(HTTP_CODES.NOT_FOUND_404).json(error('Пользователь не найден'));
            return;
        }

        const {id, email, active, role} = DBResponce[0];
        const tokens = generateTokens({id, email, active, role});
        res.cookie('refreshToken', tokens.refreshToken);
        await setUserTokenDBProxy(id, tokens.refreshToken);
        res.status(HTTP_CODES.OK_200).json(success({accessToken: tokens.accessToken}));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
