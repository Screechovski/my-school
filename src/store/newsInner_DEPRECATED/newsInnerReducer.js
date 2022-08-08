import {NEWS_INNER_AT} from "./newsInnerActionTypes";

const initialState = {}

export const newsInnerReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case NEWS_INNER_AT.INIT_START: {
            return {
                ...state,
                [payload.id]: {
                    newsInner: null,
                    inited: false,
                    loading: true,
                    error: null,
                }
            }
        }
        case NEWS_INNER_AT.INIT_SUCCESS: {
            return {
                ...state,
                [payload.id]: {
                    newsInner: payload.data,
                    inited: true,
                    loading: false,
                    error: null,
                }
            }
        }
        case NEWS_INNER_AT.INIT_FAIL: {
            return {
                ...state,
                [payload.id]: {
                    newsInner: null,
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