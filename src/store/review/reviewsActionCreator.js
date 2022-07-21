import { REVIEWS_AT } from "./reviewsActionTypes";

export const reviewsInitStart = () => ({ type: REVIEWS_AT.INIT_START, payload: {} })
export const reviewsInitSuccess = () => ({ type: REVIEWS_AT.INIT_SUCCESS, payload: {} })
export const reviewsInitFail = () => ({ type: REVIEWS_AT.INIT_FAIL, payload: {} })
