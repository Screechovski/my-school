import React, {memo} from "react";
import css from "./MainContentSubjects.module.sass";
import {getNumberArray, QUERY_CONFIG} from "../../assets/helper";
import {
    SubjectCard,
    SubjectCardLoading
} from "../../molecules/SubjectCard/SubjectCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useQuery} from "@tanstack/react-query";
import {subjectsQuery} from "../../queryes/subjects";
import {NUM} from "../../assets/constants";

export const MainContentSubjects = memo(() => {
    const {isSuccess, isError, isLoading, data, error, refetch} = useQuery(
        ["subjects"],
        subjectsQuery,
        QUERY_CONFIG
    );

    return (
        <MainContent cssClass="page__mainContainer" title="Предметы">
            {isLoading && (
                <ul className={css.mainContentSubjects__list}>
                    {getNumberArray(NUM.subjects.count).map((id) => (
                        <li key={id}>
                            <SubjectCardLoading />
                        </li>
                    ))}
                </ul>
            )}

            {isSuccess && (
                <ul className={css.mainContentSubjects__list}>
                    {data.data.map(({id, title, image}) => (
                        <li key={id}>
                            <SubjectCard
                                image={image}
                                title={title}
                                id={id}
                            />
                        </li>
                    ))}
                </ul>
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </MainContent>
    );
});
