import {useSelector} from "react-redux";
import {getSubjectInner, subjectInnerError, subjectInnerInited, subjectInnerLoading, getSubjectInnerEducators} from "./subjectInnerSelectors";

export const subjectInnerHook = (id) => ({
    subjectInnerInited: useSelector(subjectInnerInited(id)),
    subjectInnerLoading: useSelector(subjectInnerLoading(id)),
    subjectInnerError: useSelector(subjectInnerError(id)),
    subjectInner: useSelector(getSubjectInner(id)),
    subjectInnerEducators: useSelector(getSubjectInnerEducators(id)),
})