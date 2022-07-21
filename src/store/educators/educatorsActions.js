import { educatorsInitFail, educatorsInitStart, educatorsInitSuccess } from "./educatorsActionCreator";
import {myFetch} from "../../assets/helper";

export const educatorsInit = () => async (dispatch) => {
    dispatch(educatorsInitStart())

    try {
        const fetchResult = await myFetch("/educators");

        dispatch(educatorsInitSuccess(fetchResult.data))
    } catch (error) {
        console.warn(error);
        dispatch(educatorsInitFail(error.error))
    }
}