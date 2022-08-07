
import { EVENTS_AT } from './eventsActionTypes';

const initialState = {
    inited: false,
    loading: false,
    error: null,
    events: []
}

export const eventsReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case EVENTS_AT.INIT_START: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case EVENTS_AT.INIT_SUCCESS: {
            return {
                ...state,
                events: payload,
                inited: true,
                loading: false,
            }
        }
        case EVENTS_AT.INIT_FAIL: {
            return {
                ...state,
                error: payload,
                inited: false,
                loading: false,
            }
        }
        default: {
            return state;
        }
    }
}