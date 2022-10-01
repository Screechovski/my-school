import {AnswerType, RequestEmpty, RequestWithParamsAndBody} from '../types';
import {Response} from 'express';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {getAllUsersDBProxy, updateUserByIdDBProxy} from '../db/modules/users';
import {userDBToSafe} from '../dtos/userDto';
import {DBUsersModel, UserSafe} from '../models/trash';
import {validationResult} from 'express-validator';

export const readUsers = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce: DBUsersModel[] =
            (await getAllUsersDBProxy()) as DBUsersModel[];
        const cleanUsers: UserSafe[] = DBResponce.map(userDBToSafe)
            .reverse()
            // @ts-ignore
            .filter(({id}) => id !== req.user.id);

        res.status(HTTP_CODES.OK_200).json(success(cleanUsers));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const updateUser = async (
    req: RequestWithParamsAndBody<{id: string}, any>,
    res: Response<AnswerType>
) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error('Ошибка при регистрации', errors)
            );
            return;
        }
        const id = parseInt(req.params.id);
        const {active, role} = req.body;

        await updateUserByIdDBProxy(id.toString(), {
            active,
            role
        });

        res.status(HTTP_CODES.OK_200).json(success(null));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.OK_200).json(success(null));
    }
};
