import React, {memo, useEffect} from 'react';
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {NewsCard} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useDispatch} from "react-redux";
import css from "./PageSubjects.modules.sass";
import {newsInit} from "../../store/news/newsActions";
import {subjectsInit} from "../../store/subjects/subjectsActions";
import {SubjectCard} from "../../molecules/SubjectCard/SubjectCard";
import {newsHook} from "../../store/news/newsHook";
import {subjectsHook} from "../../store/subjects/subjectsHook";

let fixStrict = false;

export const PageSubjects = memo(({}) => {
    const { newsLoading, newsInited, newsError, news } = newsHook(4);
    const { subjectsInited, subjectsLoading, subjectsError, subjects } = subjectsHook();

    const dispatch = useDispatch();

    useEffect(() => {
        if (fixStrict) return;
        fixStrict = true;

        if (!newsInited && !newsLoading) dispatch(newsInit());
        if (!subjectsInited && !subjectsLoading) dispatch(subjectsInit());
    }, [])


    return (
        <div className="page r-container">
            <Sidebar
                title="Новости"
                cssClass="page__sidebar"
            >
                {newsLoading && "Loading..."}

                {newsInited &&
                <ul className="page__sidebarList">
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

            <MainContent
                cssClass="page__mainContainer"
                title="Предметы"
            >
                {subjectsLoading && "Loading..."}

                {subjectsInited &&
                    <ul className={css.pageSubjects__list}>
                        {subjects.map(({
                            id,
                            title,
                            imageName,
                        }) =>
                            <li key={id}>
                                <SubjectCard
                                    image={imageName}
                                    title={title}
                                    id={id}
                                />
                            </li>)}
                    </ul>}

                {subjectsError &&
                    <ErrorLine
                        message={subjectsError}
                        reload={() => dispatch(subjectsInit())}
                    />}
            </MainContent>
        </div>
    )
})