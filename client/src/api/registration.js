import {instance} from './server';

export const registrationSendEmail = (email) =>
    instance.post('/registration', email);

export const registrationSendCode = (code) =>
    instance.post('/registration-confirm', code);

export const registrationSendUser = (data) =>
    instance.post('/registration-end', data);
