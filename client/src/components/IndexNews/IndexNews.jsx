import React, {memo} from 'react';
import css from './IndexNews.module.sass';
import {NewsCard, NewsCardLoading} from '../../molecules/NewsCard/NewsCard';
import {ErrorLine} from '../../molecules/ErrorLine/ErrorLine';
import {getNumberArray} from '../../assets/helper';
import {useQuery} from '@tanstack/react-query';
import {NUM, QUERY_CONFIG} from '../../assets/constants';
import {getNews} from '../../api/news';

export const IndexNews = memo(() => {
    const {isSuccess, data, isLoading, error, refetch} = useQuery(
        ['news'],
        getNews,
        QUERY_CONFIG
    );

    console.log(data);

    if (!isLoading && !isSuccess && !error) {
        return <></>;
    }
    if (isLoading) {
        return (
            <ul className={css.indexNews}>
                {getNumberArray(NUM.news.indexPage).map((id) => (
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
                {data.data.slice(0, NUM.news.indexPage).map((item) => (
                    <li className={css.indexNews__item} key={item.id}>
                        <NewsCard
                            title={item.title}
                            id={item.id}
                            date={item.created}
                            body={item.message}
                            mainImgUrl={item.image}
                        />
                    </li>
                ))}
            </ul>
        );
    }
    if (error) {
        console.log(error);
        return <ErrorLine message={error.error} reload={refetch} />;
    }
    console.warn('Error IndexNews unknown state');
});
