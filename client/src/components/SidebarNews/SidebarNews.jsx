import React, {memo} from "react";
import {getNumberArray} from "../../assets/helper";
import {NewsCard, NewsCardLoading} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {useQuery} from "@tanstack/react-query";
import {NUM, QUERY_CONFIG} from "../../assets/constants";
import {getNews} from "../../api/news";

export const SidebarNews = memo(() => {
    const {isSuccess, data, isLoading, isError, error, refetch} = useQuery(
        ["news"],
        getNews,
        QUERY_CONFIG
    );

    return (
        <Sidebar title="Новости" cssClass="page__sidebar">
            {isLoading && (
                <ul className="page__sidebarList">
                    {getNumberArray(NUM.news.sidebar).map((id) => (
                        <li key={id}>
                            <NewsCardLoading />
                        </li>
                    ))}
                </ul>
            )}

            {isSuccess && (
                <ul className="page__sidebarList">
                    {data.data
                        .slice(0, NUM.news.sidebar)
                        .map((news) => (
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
        </Sidebar>
    );
});
