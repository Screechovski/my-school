import {AnswerType, RequestEmpty, RequestWithParams} from '../types';
import {Response} from 'express';
import {error, success} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {getAllSubjectsDBProxy, getSubjectDBProxy} from '../db/modules/subjects';
import {getAllSubjectsWithYearsDBProxy} from '../db/modules/subjectsYears';
import {
    DBSubjectModel,
    DBSubjectYearsModel,
    ViewSubjectModel,
    ViewSubjectYearsModel
} from '../models/trash';

export const readSubjects = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        // @ts-ignore
        const DBResponce: DBSubjectModel[] = await getAllSubjectsDBProxy();
        const cleanData: ViewSubjectModel[] = DBResponce.map(
            (subject: DBSubjectModel) => ({
                id: subject.id,
                title: subject.title,
                image: subject.image,
                description: subject.description
            })
        );

        res.status(HTTP_CODES.OK_200).json(success(cleanData));
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
        // @ts-ignore
        const DBResponce: DBSubjectModel[] = await getSubjectDBProxy(id);

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

export const readSubjectWithYears = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        // @ts-ignore
        const DBResponce: DBSubjectYearsModel[] = await getAllSubjectsWithYearsDBProxy();
        const cleanData: ViewSubjectYearsModel[] = DBResponce.map(
            (subject: DBSubjectYearsModel) => ({
                id: subject.id,
                title: subject.title,
                image: subject.image,
                description: subject.description,
                years: [
                    subject['1'],
                    subject['2'],
                    subject['3'],
                    subject['4'],
                    subject['5'],
                    subject['6'],
                    subject['7'],
                    subject['8'],
                    subject['9'],
                    subject['10'],
                    subject['11']
                ]
            })
        );

        res.status(HTTP_CODES.OK_200).json(success(cleanData));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};
