import {useSelector} from "react-redux";
import {getSubjects, getSubjectsShort, subjectsError, subjectsInited, subjectsLoading} from "./subjectsSelectors";

export const subjectsHook = (count = null) => ({
    subjectsInited: useSelector(subjectsInited),
    subjectsLoading: useSelector(subjectsLoading),
    subjectsError: useSelector(subjectsError),
    subjects: count ? useSelector(getSubjectsShort(4)) : useSelector(getSubjects),
})