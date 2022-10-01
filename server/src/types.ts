import {Request} from 'express';

export type RequestWithBody<T> = Request<{}, {}, T>;
export type RequestWithQuery<T> = Request<{}, {}, {}, T>;
export type RequestWithParams<T> = Request<T>;
export type RequestWithParamsAndBody<T, B> = Request<T, {}, B>;
export type RequestEmpty = Request<{}, {}, {}, {}>;
export type AnswerTypeSuccess = {
    data: Array<any> | object | null;
    message: string;
};
export type AnswerTypeError = {
    errors: Array<any> | object | null;
    message: string;
};
export type AnswerType = AnswerTypeSuccess | AnswerTypeError;

export type AnswerSuccess<T> = {
    data: T;
    message: string;
}
export type AnswerError<T> = {
    validationErrors?: any;
    error: T;
    message: string;
}
export type Answer<S,E> = AnswerSuccess<S> | AnswerError<E>;
