import React, {memo} from "react";
import css from "./MainContentSubjects.module.sass";
import {getNumberArray} from "../../assets/helper";
import {
    SubjectCard,
    SubjectCardLoading
} from "../../molecules/SubjectCard/SubjectCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useQuery} from "@tanstack/react-query";
import {NUM, QUERY_CONFIG} from "../../assets/constants";
import {getSubjects} from "../../api/subjects";

export const MainContentSubjects = memo(() => {
    const {isSuccess, isError, isLoading, data, error, refetch} = useQuery(
        ["subjects"],
        getSubjects,
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
