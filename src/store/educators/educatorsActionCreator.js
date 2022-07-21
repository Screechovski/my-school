import {EDUCATORS_AT} from "./educatorsActionTypes";

export const educatorsInitStart = (payload = {}) => ({ type: EDUCATORS_AT.INIT_START, payload })
export const educatorsInitSuccess = (payload = {}) => ({ type: EDUCATORS_AT.INIT_SUCCESS, payload })
export const educatorsInitFail = (payload = {}) => ({ type: EDUCATORS_AT.INIT_FAIL, payload })