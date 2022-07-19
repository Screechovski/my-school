import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { newsInited, newsLoading, getNewsShort, newsError } from "@/store/news/newsSelectors";
import { newsInit } from "@/store/news/newsActions";
import css from "./IndexNews.module.sass";
import NewsCard from '@/molecules/NewsCard/NewsCard';
import ErrorLine from "@/molecules/ErrorLine/ErrorLine";

let fixStrict = false;

export const IndexNews = (props) => {
    const news = useSelector(getNewsShort(5));
    const loading = useSelector(newsLoading);
    const inited = useSelector(newsInited);
    const error = useSelector(newsError);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fixStrict) return;
        fixStrict = true;

        dispatch(newsInit())
    }, [])

    if (!loading && !inited && !error) {
        return <></>;
    }
    if (loading) {
        return (
            <ul className={css.indexNews}>
                {([1, 2, 3, 4, 5]).map(id =>
                    <li
                        key={id}
                        className={css.indexNews__item + " loading " + css.indexNews__item_loading}
                    />)}
            </ul>
        )
    }
    if (inited) {
        return (
            <ul className={css.indexNews}>
                {news.map(item =>
                    <li className={css.indexNews__item} key={item.id}>
                        <NewsCard
                            title={item.title}
                            id={item.id}
                            date={item.date}
                            body={item.message}
                            mainImgUrl={item.image}
                            loading={false}
                        />
                    </li>)}
            </ul>
        )
    }
    if (error) {
        return <ErrorLine message={error} />
    }
    console.warn("Error IndexNews unknown state");
}