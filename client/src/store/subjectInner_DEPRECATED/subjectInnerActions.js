import {clientLog, myFetch} from "../../assets/helper";
import {
    subjectInnerInitFail,
    subjectInnerInitStart,
    subjectInnerInitSuccess
} from "./subjectInnerActionCreator";

export const subjectInnerInit = (id) => async (dispatch) => {
    dispatch(subjectInnerInitStart({id}));
    console.log(1);

    try {
        const fetchResult = await myFetch(`/subjects/${id}`);

        clientLog("fetchResult", fetchResult);

        dispatch(subjectInnerInitSuccess({id, data: fetchResult.data}));
    } catch (error) {
        console.warn(error);
        dispatch(subjectInnerInitFail({id, error: error.error}));
    }
};
