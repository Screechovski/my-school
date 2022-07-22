import React, {memo, useEffect} from 'react';
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {NewsCard} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useDispatch, useSelector} from "react-redux";
import {getNewsShort, newsError, newsInited, newsLoading} from "../../store/news/newsSelectors";

import css from "./PageSubjects.modules.sass";
import {newsInit} from "../../store/news/newsActions";
import {getSubjects, subjectsError, subjectsInited, subjectsLoading} from "../../store/subjects/subjectsSelectors";
import {subjectsInit} from "../../store/subjects/subjectsActions";
import {SubjectCard} from "../../molecules/SubjectCard/SubjectCard";

let fixStrict = false;

export const PageSubjects = memo(({}) => {
    const newsInitedPS = useSelector(newsInited);
    const newsLoadingPS = useSelector(newsLoading);
    const newsErrorPS = useSelector(newsError);
    const newsPS = useSelector(getNewsShort(4));

    const subjectsInitedPS = useSelector(subjectsInited);
    const subjectsLoadingPS = useSelector(subjectsLoading);
    const subjectsErrorPS = useSelector(subjectsError);
    const subjectsPS = useSelector(getSubjects);

    const dispatch = useDispatch();

    useEffect(() => {
        if (fixStrict) return;
        fixStrict = true;

        if (!newsInitedPS && !newsLoadingPS) dispatch(newsInit());
        if (!subjectsInitedPS && !subjectsLoadingPS) dispatch(subjectsInit());
    }, [])


    return (
        <div className="page r-container">
            <Sidebar
                title="Новости"
                cssClass="page__sidebar"
            >
                {newsLoadingPS && "Loading..."}

                {newsInitedPS &&
                <ul className="page__sidebarList">
                    {newsPS.map(({
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

                {newsErrorPS &&
                <ErrorLine
                    message={newsErrorPS}
                    reload={() => dispatch(newsInit())}
                />}
            </Sidebar>

            <MainContent
                cssClass="page__mainContainer"
                title="Предметы"
            >
                {subjectsLoadingPS && "Loading..."}

                {subjectsInitedPS && <ul className={css.pageSubjects__list}>
                    {subjectsPS.map(({
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

                {subjectsErrorPS &&
                <ErrorLine
                    message={subjectsErrorPS}
                    reload={() => dispatch(subjectsInit())}
                />}
            </MainContent>
        </div>
    )
})