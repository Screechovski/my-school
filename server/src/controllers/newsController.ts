import {
    AnswerType,
    RequestEmpty,
    RequestWithBody,
    RequestWithParams,
    RequestWithParamsAndBody
} from '../types';
import {CreatePostBodyModel} from '../models/news/CreatePostBodyModel';
import {Express, Response} from 'express';
import {error, HTTP_CODES, success} from '../assets/helper';
import {createNewsDBProxy, getAllNewsDBProxy, getNewsDBProxy} from '../db/db';
import {DeletePostParamsModel} from '../models/news/DeletePostModel';
import {ReadPostParamsModel} from '../models/news/ReadPostModel';
import {
    UpdatePostBodyModel,
    UpdatePostQueryModel
} from '../models/news/UpdatePostModel';

export const createNews = (
    req: RequestWithBody<CreatePostBodyModel>,
    res: Response<AnswerType>
) => {
    const {title, message} = req.body;

    if (!title || !title.trim() || !message || !message.trim()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error("'title' or 'message' is empty")
        );
        return;
    }

    createNewsDBProxy(null, title, message)
        .then((data) => {
            res.status(HTTP_CODES.OK_200).json(success(data));
        })
        .catch((error) => {
            console.warn(error);
            res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
        });
};

export const deleteNews = (
    req: RequestWithParams<DeletePostParamsModel>,
    res: Response<AnswerType>
) => {
    const id = parseInt(req.params.id);

    // if (!postsInstance.has(id)) {
    //     res.status(HTTP_CODES.NOT_FOUND_404).json(
    //         error('Новость не найдена')
    //     );
    //     return;
    // }
    //
    // postsInstance.remove(id);

    res.status(HTTP_CODES.OK_200).json(success(id));
};

export const readNews = (
    req: RequestEmpty,
    res: Response<AnswerType | number>
) => {
    getAllNewsDBProxy()
        .then((data) => {
            res.status(HTTP_CODES.OK_200).json(success(data));
        })
        .catch((error) => {
            console.warn(error);
            res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
        });
};

export const readSingleNews = (
    req: RequestWithParams<ReadPostParamsModel>,
    res: Response<AnswerType | number>
) => {
    const id = parseInt(req.params.id);

    getNewsDBProxy(id)
        .then((data) => {
            const cleanData = Array.isArray(data) ? data[0] : null;
            res.status(HTTP_CODES.OK_200).json(success(cleanData));
        })
        .catch((error) => {
            console.warn(error);
            res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
        });
};

export const updateNews = (
    req: RequestWithParamsAndBody<UpdatePostQueryModel, UpdatePostBodyModel>,
    res: Response<AnswerType | number>
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
