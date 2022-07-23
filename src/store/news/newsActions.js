import { newsInitFail, newsInitStart, newsInitSuccess } from "./newsActionCreator"
import {clientLog, myFetch} from "../../assets/helper";

export const newsInit = () => async (dispatch) => {
    dispatch(newsInitStart())

    try {
        const fetchResult = await myFetch("/news");

        clientLog("fetchResult", fetchResult);

        dispatch(newsInitSuccess(fetchResult.data))
    } catch (error) {
        console.warn(error);
        dispatch(newsInitFail(error.error))
    }
}