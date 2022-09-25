import React, {memo} from "react";
import css from "./MainContentNews.module.sass";
import {getNumberArray, queryConfig} from "../../assets/helper";
import {NewsCard, NewsCardLoading} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useQuery} from "@tanstack/react-query";
import {newsQuery} from "../../queryes/news";
import {NUM} from "../../assets/constants";

export const MainContentNews = memo(() => {
    const {isSuccess, data, isLoading, isError, error, refetch} = useQuery(
        ["news"],
        newsQuery,
        queryConfig
    );

    return (
        <MainContent cssClass="page__mainContainer" title="Новости">
            {isLoading && (
                <ul className={css.mainContentNews__list}>
                    {getNumberArray(NUM.news.count).map((id) => (
                        <li key={id}>
                            <NewsCardLoading />
                        </li>
                    ))}
                </ul>
            )}

            {isSuccess && (
                <ul className={css.mainContentNews__list}>
                    {data.data.map((news) => (
                        <li key={news.id}>
                            <NewsCard
                                title={news.title}
                                id={news.id}
                                date={news.created}
                                body={news.message}
                                image={news.image}
                            />
                        </li>
                    ))}
                </ul>
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </MainContent>
    );
});
