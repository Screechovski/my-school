import { NEWS_AT } from "./newsActionTypes";

const initialState = {
    inited: false,
    loading: false,
    error: null,
    news: []
}

const newsReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case NEWS_AT.INIT_START: {
            return {
                ...state,
                loading: true,
            }
        }
        case NEWS_AT.INIT_SUCCESS: {
            return {
                ...state,
                news: payload,
                inited: true,
                loading: false,
            }
        }
        case NEWS_AT.INIT_FAIL: {
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

export default newsReducer;