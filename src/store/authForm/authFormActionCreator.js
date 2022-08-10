import {AUTH_FORM_AT} from "./authFormActionTypes";

export const authFormInitAC = (payload = {}) => ({
    type: AUTH_FORM_AT.INIT,
    payload
});

export const authFormChangeFieldAC = (payload = {}) => ({
    type: AUTH_FORM_AT.CHANGE_FIELD,
    payload
});
