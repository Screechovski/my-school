import { REVIEWS_AT } from "./reviewActionTypes";

export const reviewInitStart = () => ({ type: REVIEWS_AT.INIT_START, payload: {} })
export const reviewInitSuccess = () => ({ type: REVIEWS_AT.INIT_SUCCESS, payload: {} })
export const reviewInitFail = () => ({ type: REVIEWS_AT.INIT_FAIL, payload: {} })
