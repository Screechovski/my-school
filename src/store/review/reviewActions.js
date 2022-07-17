import { REVIEWS_AT } from "./reviewActionTypes";

export const reviewInit = () => (dispatch) => {
    dispatch({ type: REVIEWS_AT.INIT_START })

    dispatch({ type: REVIEWS_AT.INIT_SUCCESS })

    dispatch({ type: REVIEWS_AT.INIT_FAIL })

}