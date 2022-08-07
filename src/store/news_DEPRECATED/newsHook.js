import {useSelector} from "react-redux";
import {getNews, getNewsItem, getNewsShort, newsError, newsInited, newsLoading} from "./newsSelectors";

export const newsHook = ({
    count = null,
    id = null
}) => ({
    newsInited: useSelector(newsInited),
    newsLoading: useSelector(newsLoading),
    newsError: useSelector(newsError),
    news: count ? useSelector(getNewsShort(count)) : (id ? useSelector(getNewsItem(id)) :  useSelector(getNews)),
})