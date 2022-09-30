export const VALIDATION_RULES = {
    password: {
        minLength: 6,
        maxLength: 20
    },
    code: {
        length: 6
    },
    news: {
        title: {
            minLength: 6,
            maxLength: 20
        },
        message: {
            maxLength: 512
        }
    }
};

export const HTTP_CODES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,

    BAD_REQUEST_400: 400,
    UNAUTHORIZED_401: 401,
    ACCESS_DENIED_403: 403,
    NOT_FOUND_404: 404,

    SERVER_ERROR_500: 500
};