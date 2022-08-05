import { educatorsInitFail, educatorsInitStart, educatorsInitSuccess } from "./educatorsActionCreator";
import {clientLog, myFetch} from "../../assets/helper";

export const educatorsInit = () => async (dispatch) => {
    dispatch(educatorsInitStart())

    try {
        const fetchResult = await myFetch("/educators");

        clientLog("fetchResult", fetchResult);

        dispatch(educatorsInitSuccess(fetchResult.data))
    } catch (error) {
        console.warn(error);
        dispatch(educatorsInitFail(error.error))
    }
}