import { EVENTS_AT } from "./eventsActionTypes"

export const eventsInitStart = (payload = {}) => ({ type: EVENTS_AT.INIT_START, payload })
export const eventsInitSuccess = (payload = {}) => ({ type: EVENTS_AT.INIT_SUCCESS, payload })
export const eventsInitFail = (payload = {}) => ({ type: EVENTS_AT.INIT_FAIL, payload })
