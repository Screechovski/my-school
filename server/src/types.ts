import {Request} from 'express';

export type RequestWithBody<T> = Request<{}, {}, T>;
export type RequestWithQuery<T> = Request<{}, {}, {}, T>;
export type RequestWithParams<T> = Request<T>;
export type RequestWithParamsAndBody<T, B> = Request<T, {}, B>;
export type RequestEmpty = Request<{}, {}, {}, {}>;
export type AnswerType = {
    type: string;
    data: Array<any> | Object | null;
    message: string;
};