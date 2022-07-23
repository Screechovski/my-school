import React, {memo, useEffect} from "react";
import { useDispatch } from 'react-redux'
import css from "./IndexNews.module.sass";
import {newsInit} from "../../store/news/newsActions";
import {NewsCard, NewsCardLoading} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {newsHook} from "../../store/news/newsHook";
import {getNumberArray} from "../../assets/helper";

let fixStrict = false;

export const IndexNews = memo(() => {
    const { newsLoading, newsInited, newsError, news } = newsHook({ count: 10});
    const dispatch = useDispatch();

    useEffect(() => {
        if (fixStrict) return;
        fixStrict = true;

        !newsInited && dispatch(newsInit())
    }, [])

    if (!newsLoading && !newsInited && !newsError) {
        return <></>;
    }
    if (newsLoading) {
        return (
            <ul className={css.indexNews}>
                {getNumberArray(10).map(id =>
                    <li className={css.indexNews__item} key={id}>
                        <NewsCardLoading />
                    </li>)}
            </ul>
        )
    }
    if (newsInited) {
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
                        />
                    </li>)}
            </ul>
        )
    }
    if (newsError) {
        return <ErrorLine
            message={newsError}
            reload={() => dispatch(newsInit())}
        />
    }
    console.warn("Error IndexNews unknown state");
})