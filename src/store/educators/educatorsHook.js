import {useSelector} from "react-redux";
import {educatorsError, educatorsInited, educatorsLoading, getEducators, getEducatorsShort} from "./educatorsSelectors";

export const educatorsHook = (count = null) => ({
    educatorsInited: useSelector(educatorsInited),
    educatorsLoading: useSelector(educatorsLoading),
    educatorsError: useSelector(educatorsError),
    educators: count ? useSelector(getEducatorsShort(count)) : useSelector(getEducators),
})