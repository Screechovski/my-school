import {AnswerType, AnswerTypeError, AnswerTypeSuccess} from '../types';
import {VALIDATION_RULES} from './constants';

export const success = (data: any, message: string = 'Success'): AnswerTypeSuccess => ({
    data,
    message
});

export const error = (message: string, errors: any = null): AnswerTypeError => ({
    errors: ("errors" in (errors ?? {})) ? errors.errors : errors,
    message
});

export const Cleaner = {
    password(value: string): string {
        return value.replace(/[^a-z0-9]/gi, '');
    },
    code(value: string): string {
        return value.replace(/[^a-z0-9]/gi, '');
    }
};

export const Validation = {
    email(email: string): Boolean {
        const reg = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        return Array.isArray(email.toLowerCase().match(reg));
    },
    password(password: string): Boolean {
        const valid =
            password.length > VALIDATION_RULES.password.minLength &&
            password.length < VALIDATION_RULES.password.maxLength;

        return valid;
    },
    code(code: string): Boolean {
        return code.length === VALIDATION_RULES.code.length;
    },
    news: {
        title(title: string): Boolean {
            return (
                title.length > VALIDATION_RULES.news.title.minLength &&
                title.length < VALIDATION_RULES.news.title.maxLength
            );
        },
        message(message: string): Boolean {
            return message.length < VALIDATION_RULES.news.message.maxLength;
        }
    }
};
