import {AnswerType, RequestEmpty} from '../types';
import {Response} from 'express';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {getAllUsersDBProxy} from '../db/modules/users';
import {userDBToSafe} from '../dtos/userDto';
import { DBUsersModel, UserSafe } from '../models/trash';

export const readUsers = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce: DBUsersModel[] = await getAllUsersDBProxy() as DBUsersModel[];
        const cleanUsers: UserSafe[] = DBResponce.map(userDBToSafe);

        res.status(HTTP_CODES.OK_200).json(success(cleanUsers));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
