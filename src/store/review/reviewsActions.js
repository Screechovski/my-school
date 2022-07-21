import { reviewsInitFail, reviewsInitStart, reviewsInitSuccess } from "./reviewsActionCreator"


export const reviewsInit = () => (dispatch) => {
    dispatch(reviewsInitStart())

    dispatch(reviewsInitSuccess())

    dispatch(reviewsInitFail())
}