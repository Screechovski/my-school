import React, {memo, useEffect} from "react";
import css from "./MainContentSubjects.module.sass";
import {getNumberArray} from "../../assets/helper";
import {SubjectCard, SubjectCardLoading} from "../../molecules/SubjectCard/SubjectCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {subjectsInit} from "../../store/subjects/subjectsActions";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {subjectsHook} from "../../store/subjects/subjectsHook";
import {useDispatch} from "react-redux";

export const MainContentSubjects = memo(() => {
    const { subjectsInited, subjectsLoading, subjectsError, subjects } = subjectsHook();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!subjectsInited && !subjectsLoading) dispatch(subjectsInit());
    }, [])

    return (
        <MainContent
            cssClass="page__mainContainer"
            title="Предметы"
        >
            {subjectsLoading &&
                <ul className={css.mainContentSubjects__list}>
                    {getNumberArray(32).map(id =>
                        <li key={id}>
                            <SubjectCardLoading />
                        </li>)}
                </ul>}

            {subjectsInited &&
                <ul className={css.mainContentSubjects__list}>
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
    )
})