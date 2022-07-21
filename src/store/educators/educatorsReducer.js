import { EDUCATORS_AT } from "./educatorsActionTypes";

const initialState = {
    inited: false,
    loading: false,
    error: null,
    subjects: null
}

export const educatorsReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case EDUCATORS_AT.INIT_START: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case EDUCATORS_AT.INIT_SUCCESS: {
            return {
                ...state,
                educators: payload,
                inited: true,
                loading: false,
            }
        }
        case EDUCATORS_AT.INIT_FAIL: {
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