import {SUBJECTS_AT} from "./subjectsActionTypes";

export const subjectsInitStart = (payload = {}) => ({ type: SUBJECTS_AT.INIT_START, payload })
export const subjectsInitSuccess = (payload = {}) => ({ type: SUBJECTS_AT.INIT_SUCCESS, payload })
export const subjectsInitFail = (payload = {}) => ({ type: SUBJECTS_AT.INIT_FAIL, payload })