import {useSelector} from "react-redux";
import {getNewsInner, newsInnerError, newsInnerInited, newsInnerLoading} from "./newsInnerSelectors";

export const newsInnerHook = (id) => ({
    newsInnerInited: useSelector(newsInnerInited(id)),
    newsInnerLoading: useSelector(newsInnerLoading(id)),
    newsInnerError: useSelector(newsInnerError(id)),
    newsInner: useSelector(getNewsInner(id))
})