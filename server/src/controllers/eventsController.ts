import {Response} from 'express';
import {AnswerType, RequestEmpty, RequestWithParams} from '../types';
import {getAllEventsDBProxy, getEventDBProxy} from '../db/db';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';

export const eventsController = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce: any = await getAllEventsDBProxy();

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(error('Ошибка сервера. Попробуй позже'))
    }
};

export const readSingleEvent = async (
    req: RequestWithParams<{id: string}>,
    res: Response<AnswerType>
) => {
    try {
        const id = parseInt(req.params.id);
        const DBResponce: any = await getEventDBProxy(id);

        if (!Array.isArray(DBResponce)) {
            res.sendStatus(HTTP_CODES.NOT_FOUND_404);
            return;
        }

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(error('Ошибка сервера. Попробуй позже'))
    }
};
