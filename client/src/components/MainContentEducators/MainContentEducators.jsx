import React, {memo} from 'react';
import css from './MainContentEducators.module.sass';
import {getNumberArray} from '../../assets/helper';
import {
    EducatorCard,
    EducatorCardLoading
} from '../../molecules/EducatorCard/EducatorCard';
import {ErrorLine} from '../../molecules/ErrorLine/ErrorLine';
import {MainContent} from '../../molecules/MainContent/MainContent';
import {useQuery} from '@tanstack/react-query';
import {getEducators} from '../../api/educators';
import {QUERY_CONFIG} from '../../assets/constants';

export const MainContentEducators = memo(() => {
    const {isSuccess, data, isLoading, isError, error, refetch} = useQuery(
        ['educators'],
        getEducators,
        QUERY_CONFIG
    );

    return (
        <MainContent cssClass="page__mainContainer" title="Преподаватели">
            {isLoading && (
                <ul className={css.mainContentEducators__list}>
                    {getNumberArray(15).map((id) => (
                        <li key={id}>
                            <EducatorCardLoading />
                        </li>
                    ))}
                </ul>
            )}

            {isSuccess && (
                <ul className={css.mainContentEducators__list}>
                    {data.data.map((educator) => (
                        <li key={educator.id}>
                            <EducatorCard
                                image={educator.image}
                                name={educator.name}
                                email={educator.email}
                                id={educator.id}
                            />
                        </li>
                    ))}
                </ul>
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </MainContent>
    );
});
