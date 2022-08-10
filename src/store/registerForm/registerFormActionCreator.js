import {REGISTER_FORM_AT} from "./registerFormActionTypes";

export const registerFormInitAC = (payload = {}) => ({
    type: REGISTER_FORM_AT.INIT,
    payload
});

export const registerFormChangeFieldAC = (payload = {}) => ({
    type: REGISTER_FORM_AT.CHANGE_FIELD,
    payload
});
