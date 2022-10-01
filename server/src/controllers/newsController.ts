import {
    AnswerType,
    RequestEmpty,
    RequestWithBody,
    RequestWithParams,
    RequestWithParamsAndBody
} from '../types';
import {Response} from 'express';
import {error, success, Validation} from '../assets/helper';
import {HTTP_CODES} from '../assets/constants';
import {
    createNewsDBProxy,
    getAllNewsDBProxy,
    getNewsDBProxy
} from '../db/modules/news';
import { CreatePostBodyModel, DeletePostParamsModel, ReadPostParamsModel, UpdatePostBodyModel, UpdatePostQueryModel } from '../models/trash';

export const createNews = async (
    req: RequestWithBody<CreatePostBodyModel>,
    res: Response<AnswerType>
) => {
    try {
        const title = req.body.title.trim();
        const message = req.body.message.trim();

        if (!Validation.news.title(title)) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error('Проверьте поле title')
            );
            return;
        }
        if (!Validation.news.message(message)) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error('Проверьте поле message')
            );
            return;
        }

        const DBResponce = await createNewsDBProxy(null, title, message);

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const deleteNews = (
    req: RequestWithParams<DeletePostParamsModel>,
    res: Response<AnswerType>
) => {
    try {
        const id = parseInt(req.params.id);

        res.status(HTTP_CODES.OK_200).json(success(id));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const readNews = async (
    req: RequestEmpty,
    res: Response<AnswerType>
) => {
    try {
        const DBResponce = await getAllNewsDBProxy();

        res.status(HTTP_CODES.OK_200).json(success(DBResponce));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const readSingleNews = async (
    req: RequestWithParams<ReadPostParamsModel>,
    res: Response<AnswerType>
) => {
    try {
        const id = parseInt(req.params.id);
        const DBResponce = await getNewsDBProxy(id);
        const cleanData = Array.isArray(DBResponce) ? DBResponce[0] : null;

        res.status(HTTP_CODES.OK_200).json(success(cleanData));
    } catch (e) {
        console.warn(e);
        res.status(HTTP_CODES.SERVER_ERROR_500).json(
            error('Ошибка сервера. Попробуй позже')
        );
    }
};

export const updateNews = (
    req: RequestWithParamsAndBody<UpdatePostQueryModel, UpdatePostBodyModel>,
    res: Response<AnswerType>
) => {
    const id = parseInt(req.params.id);
    const {title, message} = req.body;

    // if (!postsInstance.has(id)) {
    //     res.status(HTTP_CODES.NOT_FOUND_404).json(
    //         error('Новость не найдена')
    //     );
    //     return;
    // }
    //
    // if (!title || !title.trim() || !message || !message.trim()) {
    //     res.status(HTTP_CODES.BAD_REQUEST_400).json(
    //         error("'title' or 'message' is empty")
    //     );
    //     return;
    // }
    //
    // const updatedPost = postsInstance.update(id, title, message);

    res.status(HTTP_CODES.OK_200).json(success(null));
};
