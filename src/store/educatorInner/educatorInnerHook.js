import {useSelector} from "react-redux";
import {
    educatorInnerError,
    educatorInnerInited,
    educatorInnerLoading,
    getEducatorInner
} from "./educatorInnerSelectors";

export const educatorInnerHook = (id) => ({
    educatorInnerInited: useSelector(educatorInnerInited(id)),
    educatorInnerLoading: useSelector(educatorInnerLoading(id)),
    educatorInnerError: useSelector(educatorInnerError(id)),
    educatorInner: useSelector(getEducatorInner(id))
})