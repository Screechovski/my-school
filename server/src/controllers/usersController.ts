import {AnswerType, RequestEmpty} from '../types';
import {Response} from 'express';
import {getAllUsersDBProxy} from '../db/db';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {ViewUserModel} from '../models/users/ViewUserModel';
import {MysqlError} from 'mysql';
import {DBUserModel} from '../models/users/DBUserModel';

export const readUsers = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        // @ts-ignore
        const DBResponce: DBUserModel[] = await getAllUsersDBProxy();

        const cleanUsers: ViewUserModel[] = DBResponce.map(
            (user: DBUserModel): ViewUserModel => ({
                id: user.id,
                name: user.name,
                surname: user.surname,
                patronymic: user.patronymic,
                role: user.role,
                active: !!user.active,
                phone: user.phone,
                email: user.email,
                image: user.image
            })
        );

        res.status(HTTP_CODES.OK_200).json(success(cleanUsers));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};