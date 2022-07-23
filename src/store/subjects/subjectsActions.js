import {subjectsInitFail, subjectsInitStart, subjectsInitSuccess} from "./subjectsActionCreator"
import {clientLog, myFetch} from "../../assets/helper";


export const subjectsInit = () => async (dispatch) => {
    dispatch(subjectsInitStart())

    try {
        const fetchResult = await myFetch("/subjects");

        clientLog("fetchResult", fetchResult);

        dispatch(subjectsInitSuccess(fetchResult.data))
    } catch (error) {
        console.warn(error);
        dispatch(subjectsInitFail(error.error))
    }
}