import {AnswerType, RequestEmpty, RequestWithParams} from '../types';
import {Response} from 'express';
import {getAllSubjectsDBProxy, getSubjectDBProxy} from '../db/db';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';

export const subjectsController = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce = await getAllSubjectsDBProxy();

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const readSingleSubject = async (
    req: RequestWithParams<{id: string}>,
    res: Response<AnswerType>
) => {
    const id = parseInt(req.params.id);
    try {
        const DBResponce = await getSubjectDBProxy(id);

        if (Array.isArray(DBResponce)) {
            res.status(HTTP_CODES.OK_200).json(success(DBResponce[0]));
            return;
        }
        res.status(HTTP_CODES.NOT_FOUND_404).json(
            error('Запрашиваемые данные не найдены')
        );
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
