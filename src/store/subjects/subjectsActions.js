import {subjectsInitFail, subjectsInitStart, subjectsInitSuccess} from "./subjectsActionCreator"
import {myFetch} from "../../assets/helper";


export const subjectsInit = () => async (dispatch) => {
    dispatch(subjectsInitStart())

    try {
        const fetchResult = await myFetch("/subjects");

        dispatch(subjectsInitSuccess(fetchResult.data))
    } catch (error) {
        console.warn(error);
        dispatch(subjectsInitFail(error.error))
    }
}