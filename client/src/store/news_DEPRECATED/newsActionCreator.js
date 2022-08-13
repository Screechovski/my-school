import { NEWS_AT } from "./newsActionTypes"

export const newsInitStart = () => ({ type: NEWS_AT.INIT_START, payload: {} })
export const newsInitSuccess = (payload = {}) => ({ type: NEWS_AT.INIT_SUCCESS, payload })
export const newsInitFail = (payload = {}) => ({ type: NEWS_AT.INIT_FAIL, payload })
