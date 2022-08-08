import {
    newsInnerInitFail,
    newsInnerInitStart, newsInnerInitSuccess,
} from "./newsInnerActionCreator";
import {clientLog, myFetch} from "../../assets/helper";

export const newsInnerInit = (id) => async (dispatch) => {
    dispatch(newsInnerInitStart({ id }))

    try {
        const fetchResult = await myFetch(`/news/${id}`);

        clientLog("fetchResult", fetchResult);

        dispatch(newsInnerInitSuccess({ id, data: fetchResult.data}))
    } catch (error) {
        console.warn(error);
        dispatch(newsInnerInitFail({ id, error: error.error}))
    }
}