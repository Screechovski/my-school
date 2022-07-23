import {
    educatorInnerInitFail,
    educatorInnerInitStart, educatorInnerInitSuccess,
} from "./educatorInnerActionCreator";
import {clientLog, myFetch} from "../../assets/helper";

export const educatorInnerInit = (id) => async (dispatch) => {
    dispatch(educatorInnerInitStart({ id }))

    try {
        const fetchResult = await myFetch(`/educators/${id}`);

        clientLog("fetchResult", fetchResult);

        dispatch(educatorInnerInitSuccess({ id, data: fetchResult.data}))
    } catch (error) {
        console.warn(error);
        dispatch(educatorInnerInitFail({ id, error: error.error}))
    }
}