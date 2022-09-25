import {instance} from "./server";

export const resetPasswordSendEmail = (email) => instance.post('/reset-password', email);
export const resetPasswordSendCode = (code) => instance.post('/reset-password-confirm', code);
export const resetPasswordSendPassword = (data) => instance.post('/reset-password-end', data);