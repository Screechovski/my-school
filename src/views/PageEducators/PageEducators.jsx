import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EducatorCard } from "../../molecules/educatorCard/educatorCard";
import { ErrorLine } from "../../molecules/ErrorLine/ErrorLine";
import { MainContent } from "../../molecules/MainContent/MainContent";
import { NewsCard } from "../../molecules/NewsCard/NewsCard";
import { Sidebar } from "../../molecules/Sidebar/Sidebar";
import { educatorsInit } from "../../store/educators/educatorsActions";
import { educatorsError, educatorsInited, educatorsLoading, getEducators } from "../../store/educators/educatorsSelectors";
import { newsInit } from "../../store/news/newsActions";
import css from "./PageEducators.module.sass";
import {newsHook} from "../../store/news/newsHook";
import {educatorsHook} from "../../store/educators/educatorsHook";

let fixStrict = false;

export const PageEducators = memo(() => {
    const { newsLoading, newsInited, newsError, news } = newsHook(4);
    const { educatorsLoading, educatorsInited, educatorsError, educators } = educatorsHook();

    const dispatch = useDispatch();

    useEffect(()=>{
        if (fixStrict) return;
        fixStrict = true;

        if (!newsInited && !newsLoading) dispatch(newsInit())
        if (!educatorsInited && !educatorsLoading) dispatch(educatorsInit())
    }, [])

    return (
        <div className="page r-container">
            <Sidebar
                title="Новости"
                cssClass="page__sidebar"
            >
                {newsLoading && "Loading..."}

                {newsInited && <ul className="page__sidebarList">
                    {news.slice(0, 4).map(({
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
                title="Преподаватели"
            >
                {educatorsLoading && "Loading..."}

                {educatorsInited &&
                    <ul className={css.pageEducators__list}>
                        {educators.map(({
                            id,
                            name,
                            tel,
                            email,
                            imageName,
                        }) =>
                            <li key={id}>
                                <EducatorCard
                                    image={imageName}
                                    name={name}
                                    email={email}
                                    id={id}
                                    phone={tel}
                                />
                            </li>)}
                    </ul>}

                {educatorsError &&
                    <ErrorLine
                        message={educatorsError}
                        reload={() => dispatch(educatorsInit())}
                    />}
            </MainContent>
        </div>
    )
})