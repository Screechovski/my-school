import { REVIEWS_AT } from "./reviewsActionTypes";

const initialState = {
    inited: false,
    loading: false,
    initErrors: null,
    reviews: null
}

export const reviewsReducer = (state = initialState, action = {}) => {
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