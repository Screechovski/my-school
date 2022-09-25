import {AnswerType, RequestEmpty, RequestWithParams} from '../types';
import {Response} from 'express';
import {getAllSubjectsDBProxy, getSubjectDBProxy} from '../db/db';
import {HTTP_CODES, success} from '../assets/helper';

export const subjectsController = (
    req: RequestEmpty,
    res: Response<AnswerType | number>
) => {
    getAllSubjectsDBProxy()
        .then((data) => {
            res.status(HTTP_CODES.OK_200).json(success(data));
        })
        .catch((error) => {
            console.warn(error);
            res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
        });
};

export const readSingleSubject = (
    req: RequestWithParams<{id: string}>,
    res: Response<AnswerType | number>
) => {
    const id = parseInt(req.params.id);

    getSubjectDBProxy(id)
        .then((data) => {
            const cleanData = Array.isArray(data) ? data[0] : null;
            res.status(HTTP_CODES.OK_200).json(success(cleanData));
        })
        .catch((error) => {
            console.warn(error);
            res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
        });
};
