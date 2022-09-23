import {AnswerType} from '../types';

export const HTTP_CODES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,

    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,

    SERVER_ERROR_500: 500
};

export const success = (data: any, message = ''): AnswerType => ({
    type: 'SUCCESS',
    data: data,
    message: message
});

export const error = (message: string = ''): AnswerType => ({
    type: 'ERROR',
    data: null,
    message: message
});
