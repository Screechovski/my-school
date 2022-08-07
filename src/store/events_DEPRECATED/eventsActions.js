import {eventsInitFail, eventsInitStart, eventsInitSuccess} from "./eventsActionCreator";
import {clientLog, myFetch} from "../../assets/helper";

export const eventsInit = () => async (dispatch) => {
    dispatch(eventsInitStart())

    try {
        const fetchResult = await myFetch("/events");

        clientLog("fetchResult", fetchResult);

        dispatch(eventsInitSuccess(fetchResult.data))
    } catch (error) {
        console.warn(error);
        dispatch(eventsInitFail(error.error))
    }
}