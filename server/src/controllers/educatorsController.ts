import {AnswerType, RequestEmpty, RequestWithParams} from '../types';
import {Response} from 'express';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {getAllEducatorsDBProxy, getEducatorDBProxy} from '../db/modules/users';
import {userToCard} from '../dtos/userDto';
import { CardUserModel, DBUsersModel, InputEducatorIdModel } from '../models/trash';

export const readEducators = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce: DBUsersModel[] = (await getAllEducatorsDBProxy()) as DBUsersModel[];
        const cleanData: CardUserModel[] = DBResponce.map(userToCard);

        res.status(HTTP_CODES.OK_200).json(success(cleanData));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const readSingleEducator = async (
    req: RequestWithParams<InputEducatorIdModel>,
    res: Response<AnswerType>
) => {
    const id = parseInt(req.params.id);

    try {
        const DBResponce: DBUsersModel[] = (await getEducatorDBProxy(
            id
        )) as DBUsersModel[];

        if (!DBResponce.length) {
            res.status(HTTP_CODES.NOT_FOUND_404).json(
                error('Запрашиваемые данные не найдены')
            );
            return;
        }

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
