export const HTTP_CODES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,

    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404
};

type ResponseType = {
    type: string;
    data: Array<any> | Object | null;
    message: string;
};

export const success = (data: any, message = ''): ResponseType => ({
    type: 'SUCCESS',
    data: data,
    message: message
});

export const error = (message: string = ''): ResponseType => ({
    type: 'ERROR',
    data: null,
    message: message
});
