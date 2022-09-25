import React, {memo} from 'react';
import {useParams} from 'react-router-dom';
import {SubjectInner} from '../../molecules/SubjectInner/SubjectInner';
import {ErrorLine} from '../../molecules/ErrorLine/ErrorLine';
import {MainContent} from '../../molecules/MainContent/MainContent';
import {useQuery} from '@tanstack/react-query';
import {subjectQuery, subjectsQuery} from '../../queryes/subjects';
import {queryConfig} from '../../assets/helper';

export const MainContentSubjectInner = memo(() => {
    const {subjectId} = useParams();
    const {isLoading, isSuccess, data, refetch, isError, error} = useQuery(
        ['subject', subjectId],
        subjectQuery(subjectId),
        queryConfig
    );

    console.log(isLoading, isSuccess, data, refetch, isError, error);

    return <></>;

    const title = isSuccess ? data.data.title : 'Предмет...';

    return (
        <MainContent cssClass="page__mainContainer" title={title}>
            {isLoading && 'Loading'}

            {isSuccess && (
                <SubjectInner
                    description={data.data.description}
                    educators={data.data.educators}
                    subjects={data.data.subjects}
                    subjectId={data.data.id}
                />
            )}

            {isError && (
                <ErrorLine
                    message={error.error}
                    reload={refetch}
                />
            )}
        </MainContent>
    );
});
