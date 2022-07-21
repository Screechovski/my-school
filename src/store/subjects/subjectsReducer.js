import { SUBJECTS_AT } from "./subjectsActionTypes";

const initialState = {
    inited: false,
    loading: false,
    error: null,
    subjects: null
}

export const subjectsReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SUBJECTS_AT.INIT_START: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case SUBJECTS_AT.INIT_SUCCESS: {
            return {
                ...state,
                subjects: payload,
                inited: true,
                loading: false,
            }
        }
        case SUBJECTS_AT.INIT_FAIL: {
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