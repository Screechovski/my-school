import {useSelector} from "react-redux";
import {getNews, getNewsShort, newsError, newsInited, newsLoading} from "./newsSelectors";

export const newsHook = (count = null) => ({
    newsInited: useSelector(newsInited),
    newsLoading: useSelector(newsLoading),
    newsError: useSelector(newsError),
    news: count ? useSelector(getNewsShort(count)) : useSelector(getNews),
})