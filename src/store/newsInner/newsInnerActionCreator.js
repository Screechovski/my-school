import {NEWS_INNER_AT} from "./newsInnerActionTypes";

export const newsInnerInitStart = (payload = {}) => ({ type: NEWS_INNER_AT.INIT_START, payload })
export const newsInnerInitSuccess = (payload = {}) => ({ type: NEWS_INNER_AT.INIT_SUCCESS, payload })
export const newsInnerInitFail = (payload = {}) => ({ type: NEWS_INNER_AT.INIT_FAIL, payload })