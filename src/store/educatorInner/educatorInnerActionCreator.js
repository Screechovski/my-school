import {EDUCATOR_INNER_AT} from "./educatorInnerActionTypes";

export const educatorInnerInitStart = (payload = {}) => ({ type: EDUCATOR_INNER_AT.INIT_START, payload })
export const educatorInnerInitSuccess = (payload = {}) => ({ type: EDUCATOR_INNER_AT.INIT_SUCCESS, payload })
export const educatorInnerInitFail = (payload = {}) => ({ type: EDUCATOR_INNER_AT.INIT_FAIL, payload })