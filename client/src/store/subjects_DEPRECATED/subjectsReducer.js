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
                subjects: null,
                inited: false,
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
                error: null,
            }
        }
        case SUBJECTS_AT.INIT_FAIL: {
            return {
                ...state,
                subjects: null,
                inited: false,
                loading: false,
                error: payload,
            }
        }
        default: {
            return state;
        }
    }
}