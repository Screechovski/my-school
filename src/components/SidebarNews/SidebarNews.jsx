import React, {memo, useEffect} from "react";
import {getNumberArray} from "../../assets/helper";
import {NewsCard, NewsCardLoading} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {newsInit} from "../../store/news/newsActions";
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {newsHook} from "../../store/news/newsHook";
import {useDispatch} from "react-redux";

export const SidebarNews = memo(() => {
    const { newsLoading, newsInited, newsError, news } = newsHook({ count: 4 });
    const dispatch = useDispatch();

    useEffect(() => {
        if (!newsInited && !newsLoading) dispatch(newsInit())
    }, [])

    return (
        <Sidebar
            title="Новости"
            cssClass="page__sidebar"
        >
            {newsLoading &&
                <ul className="page__sidebarList">
                    {getNumberArray(4).map(id =>
                        <li key={id}>
                            <NewsCardLoading />
                        </li>)}
                </ul>}

            {newsInited && <ul className="page__sidebarList">
                {news.map(({
                    title,
                    id,
                    date,
                    message,
                    image
                }) =>
                    <li key={id}>
                        <NewsCard
                            title={title}
                            id={id}
                            date={date}
                            body={message}
                            mainImgUrl={image}
                        />
                    </li>)}
            </ul>}

            {newsError &&
                <ErrorLine
                    message={newsError}
                    reload={() => dispatch(newsInit())}
                />}
        </Sidebar>
    )
})