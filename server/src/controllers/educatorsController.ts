import {AnswerType, RequestEmpty, RequestWithParams} from '../types';
import {Response} from 'express';
import {getAllEducatorsDBProxy, getEducatorDBProxy} from '../db/db';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';

export const readEducators = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce = await getAllEducatorsDBProxy();

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(error('Ошибка сервера. Попробуй позже'))
    }
};

export const readSingleEducator = async (
    req: RequestWithParams<{id: string}>,
    res: Response<AnswerType>
) => {
    const id = parseInt(req.params.id);

    try {
        const DBResponce = await getEducatorDBProxy(id);

        if (!Array.isArray(DBResponce)) {
            res.status(HTTP_CODES.NOT_FOUND_404).json(
                error('Запрашиваемые данные не найдены')
            );
            return;
        }
        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(error('Ошибка сервера. Попробуй позже'))
    }
};
