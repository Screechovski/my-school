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
import { getNewsShort, newsError, newsInited, newsLoading } from "../../store/news/newsSelectors";
import css from "./PageEducators.module.sass";

let fixStrict = false;

export const PageEducators = memo(() => {
    const newsLoadingPS = useSelector(newsLoading);
    const newsInitedPS = useSelector(newsInited);
    const newsErrorPS = useSelector(newsError);
    const newsPS = useSelector(getNewsShort(4));

    const educatorsLoadingPS = useSelector(educatorsLoading);
    const educatorsInitedPS = useSelector(educatorsInited);
    const educatorsErrorPS = useSelector(educatorsError);
    const educatorsPS = useSelector(getEducators);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (fixStrict) return;
        fixStrict = true;

        if (!newsInitedPS && !newsLoadingPS) dispatch(newsInit())
        if (!educatorsInitedPS && !educatorsLoadingPS) dispatch(educatorsInit())
    }, [])

    return (
        <div className="page r-container">
            <Sidebar
                title="Новости"
                cssClass="page__sidebar"
            >
                {newsLoadingPS && "Loading..."}

                {newsInitedPS && <ul className="page__sidebarList">
                    {newsPS.slice(0, 4).map(({
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
                title="Преподаватели"
            >
                {educatorsLoadingPS && "Loading..."}

                {educatorsInitedPS &&
                    <ul className={css.pageEducators__list}>
                        {educatorsPS.map(({
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

                {educatorsErrorPS &&
                    <ErrorLine
                        message={educatorsErrorPS}
                        reload={() => dispatch(educatorsInit())}
                    />}
            </MainContent>
        </div>
    )
})