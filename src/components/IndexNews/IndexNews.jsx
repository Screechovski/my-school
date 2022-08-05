import React, {memo} from "react";
import css from "./IndexNews.module.sass";
import {NewsCard, NewsCardLoading} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {getNumberArray} from "../../assets/helper";
import {useQuery} from "@tanstack/react-query";
import {newsQuery} from "../../queryes/news";
import {num} from "../../assets/magicNumbers";

export const IndexNews = memo(() => {
    const {isSuccess, data, isLoading, error, refetch} = useQuery(
        ["news"],
        newsQuery
    );

    if (!isLoading && !isSuccess && !error) {
        return <></>;
    }
    if (isLoading) {
        return (
            <ul className={css.indexNews}>
                {getNumberArray(10).map((id) => (
                    <li className={css.indexNews__item} key={id}>
                        <NewsCardLoading />
                    </li>
                ))}
            </ul>
        );
    }
    if (isSuccess) {
        return (
            <ul className={css.indexNews}>
                {data.data.slice(0, num.index.newsCount).map((item) => (
                    <li className={css.indexNews__item} key={item.id}>
                        <NewsCard
                            title={item.title}
                            id={item.id}
                            date={item.date}
                            body={item.message}
                            mainImgUrl={item.image}
                        />
                    </li>
                ))}
            </ul>
        );
    }
    if (error) {
        return <ErrorLine message={error.error} reload={refetch} />;
    }
    console.warn("Error IndexNews unknown state");
});
