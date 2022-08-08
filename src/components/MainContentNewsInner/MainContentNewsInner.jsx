import React, {memo, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {newsInnerHook} from "../../store/newsInner/newsInnerHook";
import {newsInnerInit} from "../../store/newsInner/newsInnerActions";
import {NewsInner, NewsInnerLoading} from "../../molecules/NewsInner/NewsInner";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";

export const MainContentNewsInner = memo(() => {
    const {newsId} = useParams();
    const dispatch = useDispatch();
    const {newsInnerInited, newsInnerLoading, newsInnerError, newsInner} =
        newsInnerHook(newsId);

    useEffect(() => {
        if (!newsInnerInited && !newsInnerLoading)
            dispatch(newsInnerInit(newsId));
    }, [newsInnerInited, newsInnerLoading]);

    return (
        <MainContent cssClass="page__mainContainer" title="Новость">
            {newsInnerLoading && <NewsInnerLoading />}

            {newsInnerInited && (
                <NewsInner
                    image={newsInner.image}
                    title={newsInner.title}
                    date={newsInner.date}
                    message={newsInner.message}
                />
            )}

            {newsInnerError && (
                <ErrorLine
                    message={newsInnerError}
                    reload={() => dispatch(newsInnerInit(newsId))}
                />
            )}
        </MainContent>
    );
});
