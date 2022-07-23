import { EDUCATOR_INNER_AT } from "./educatorInnerActionTypes";

const initialState = {}

export const educatorInnerReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case EDUCATOR_INNER_AT.INIT_START: {
            return {
                ...state,
                [payload.id]: {
                    educatorInner: null,
                    inited: false,
                    loading: true,
                    error: null,
                }
            }
        }
        case EDUCATOR_INNER_AT.INIT_SUCCESS: {
            return {
                ...state,
                [payload.id]: {
                    educatorInner: payload.data,
                    inited: true,
                    loading: false,
                    error: null,
                }
            }
        }
        case EDUCATOR_INNER_AT.INIT_FAIL: {
            return {
                ...state,
                [payload.id]: {
                    educatorInner: null,
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