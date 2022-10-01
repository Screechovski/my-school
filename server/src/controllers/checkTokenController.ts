import {Response} from 'express';
import {HTTP_CODES} from '../assets/constants';
import {success} from '../assets/helper';
import {AnswerType, RequestEmpty} from '../types';

export const checkToken = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    res.status(HTTP_CODES.OK_200).json(success(null));
};
