import React, { memo, useEffect } from "react";
import css from "./MainContentEducators.module.sass";
import {getNumberArray} from "../../assets/helper";
import {EducatorCard, EducatorCardLoading} from "../../molecules/EducatorCard/EducatorCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {educatorsInit} from "../../store/educators/educatorsActions";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {educatorsHook} from "../../store/educators/educatorsHook";
import {useDispatch} from "react-redux";

export const MainContentEducators = memo(() => {
    const { educatorsLoading, educatorsInited, educatorsError, educators } = educatorsHook();

    const dispatch = useDispatch();

    useEffect(() => {
        if (!educatorsInited && !educatorsLoading) dispatch(educatorsInit())
    }, [])

    return (
        <MainContent
            cssClass="page__mainContainer"
            title="Преподаватели"
        >
            {educatorsLoading &&
                <ul className={css.mainContentEducators__list}>
                    {getNumberArray(15).map((id) =>
                        <li key={id}>
                            <EducatorCardLoading />
                        </li>)}
                </ul>}

            {educatorsInited &&
                <ul className={css.mainContentEducators__list}>
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
    )
})