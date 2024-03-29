import {Response} from 'express';
import {AnswerType, RequestEmpty} from '../types';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {setUserTokenDBProxy} from '../db/modules/users';
import {Token} from '../assets/token';

export const logout = async (req: RequestEmpty, res: Response<AnswerType>) => {
    try {
        const {refreshToken} = req.cookies;
        // @ts-ignore
        const {id} = Token.decodeRefresh(refreshToken);

        await setUserTokenDBProxy(id, null);
        res.clearCookie('refreshToken');
        res.status(HTTP_CODES.OK_200).json(success(null, 'Вы успешно вышли'));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
