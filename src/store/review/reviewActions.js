import { reviewInitFail, reviewInitStart, reviewInitSuccess } from "./reviewActionCreator"


export const reviewInit = () => (dispatch) => {
    dispatch(reviewInitStart())

    dispatch(reviewInitSuccess())

    dispatch(reviewInitFail())
}