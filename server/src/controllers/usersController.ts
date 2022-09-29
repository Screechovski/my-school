import {AnswerType, RequestEmpty} from '../types';
import {Response} from 'express';
import {getAllUsersDBProxy} from '../db/db';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';

export const readUsers = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce = await getAllUsersDBProxy();

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(error('Ошибка сервера. Попробуй позже'))
    }
};