import {SUBJECT_INNER_AT} from "./subjectInnerActionTypes";

export const subjectInnerInitStart = (payload = {}) => ({ type: SUBJECT_INNER_AT.INIT_START, payload })
export const subjectInnerInitSuccess = (payload = {}) => ({ type: SUBJECT_INNER_AT.INIT_SUCCESS, payload })
export const subjectInnerInitFail = (payload = {}) => ({ type: SUBJECT_INNER_AT.INIT_FAIL, payload })