import {SUBJECT_INNER_AT} from "./subjectInnerActionTypes";

const initialState = {}

export const subjectInnerReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SUBJECT_INNER_AT.INIT_START: {
            return {
                ...state,
                [payload.id]: {
                    subjectInner: null,
                    subjectInnerEducators: null,
                    inited: false,
                    loading: true,
                    error: null,
                }
            }
        }
        case SUBJECT_INNER_AT.INIT_SUCCESS: {
            return {
                ...state,
                [payload.id]: {
                    subjectInner: payload.data.subject,
                    subjectInnerEducators: payload.data.educators,
                    inited: true,
                    loading: false,
                    error: null,
                }
            }
        }
        case SUBJECT_INNER_AT.INIT_FAIL: {
            return {
                ...state,
                [payload.id]: {
                    subjectInner: null,
                    subjectInnerEducators: null,
                    inited: false,
                    loading: false,
                    error: payload.error,
                }
            }
        }
        default: {
            return state;
        }
    }
}