import React, {memo} from 'react';
import {useParams} from 'react-router-dom';
import {NewsInner, NewsInnerLoading} from '../../molecules/NewsInner/NewsInner';
import {ErrorLine} from '../../molecules/ErrorLine/ErrorLine';
import {MainContent} from '../../molecules/MainContent/MainContent';
import {useQuery} from '@tanstack/react-query';
import {getSingleNews} from '../../api/news';
import {QUERY_CONFIG} from '../../assets/constants';

export const MainContentNewsInner = memo(() => {
    const {newsId} = useParams();
    const {isLoading, isSuccess, isError, data, error, refetch} = useQuery(
        ['news', newsId],
        getSingleNews(newsId),
        QUERY_CONFIG
    );

    return (
        <MainContent cssClass="page__mainContainer" title="Новость">
            {isLoading && <NewsInnerLoading />}

            {isSuccess && (
                <NewsInner
                    image={data.data.image}
                    title={data.data.title}
                    date={data.data.created}
                    message={data.data.message}
                />
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </MainContent>
    );
});
