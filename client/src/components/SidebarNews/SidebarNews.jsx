import React, {memo} from "react";
import {getNumberArray} from "../../assets/helper";
import {NewsCard, NewsCardLoading} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {useQuery} from "@tanstack/react-query";
import {newsQuery} from "../../queryes/news";
import {NUM} from "../../assets/constants";

export const SidebarNews = memo(() => {
    const {isSuccess, data, isLoading, isError, error, refetch} = useQuery(
        ["news"],
        newsQuery
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
                        .map(({title, id, date, message, image}) => (
                            <li key={id}>
                                <NewsCard
                                    title={title}
                                    id={id}
                                    date={date}
                                    body={message}
                                    mainImgUrl={image}
                                />
                            </li>
                        ))}
                </ul>
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </Sidebar>
    );
});
