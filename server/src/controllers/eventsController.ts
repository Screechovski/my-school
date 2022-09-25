import {Express, Response} from 'express';
import {AnswerType, RequestEmpty, RequestWithParams} from '../types';
import {getAllEventsDBProxy, getEventDBProxy} from '../db/db';
import {HTTP_CODES, success} from '../assets/helper';

export const eventsController = (
    req: RequestEmpty,
    res: Response<AnswerType | number>
) => {
    getAllEventsDBProxy()
        .then((data) => {
            res.status(HTTP_CODES.OK_200).json(success(data));
        })
        .catch((error) => {
            console.warn(error);
            res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
        });
};

export const readSingleEvent = (
    req: RequestWithParams<{id: string}>,
    res: Response<AnswerType | number>
) => {
    const id = parseInt(req.params.id);

    getEventDBProxy(id)
        .then((data) => {
            res.status(HTTP_CODES.OK_200).json(success(data));
        })
        .catch((error) => {
            console.warn(error);
            res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
        });
};
