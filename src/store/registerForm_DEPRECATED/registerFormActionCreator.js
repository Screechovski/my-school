import {REGISTER_FORM_AT} from "./registerFormActionTypes";

export const registerFormInitAC = (payload = {}) => ({
    type: REGISTER_FORM_AT.INIT,
    payload
});

export const registerFormChangeFieldAC = (payload = {}) => ({
    type: REGISTER_FORM_AT.CHANGE_FIELD,
    payload
});

export const registerFormSubmitStartAC = (payload = {}) => ({
    type: REGISTER_FORM_AT.SUBMIT_START,
    payload
});
export const registerFormSubmitSuccessAC = (payload = {}) => ({
    type: REGISTER_FORM_AT.SUBMIT_SUCCESS,
    payload
});
export const registerFormSubmitFailAC = (payload = {}) => ({
    type: REGISTER_FORM_AT.SUBMIT_FAIL,
    payload
});
