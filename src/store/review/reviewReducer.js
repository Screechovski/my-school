import { REVIEWS_AT } from "./reviewActionTypes";

const initialState = {
    inited: false,
    loading: false,
    initErrors: null,
    reviews: null
}

export const reviewReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case REVIEWS_AT.INIT_START: {
            return state;
        }
        default: {
            return state;
        }
    }
}