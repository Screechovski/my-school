import React, {memo} from 'react';
import {
    EducatorInner,
    EducatorInnerLoading
} from '../../molecules/EducatorInner/EducatorInner';
import {ErrorLine} from '../../molecules/ErrorLine/ErrorLine';
import {MainContent} from '../../molecules/MainContent/MainContent';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {getEducator} from '../../api/educators';
import {QUERY_CONFIG} from '../../assets/constants';

export const MainContentEducatorInner = memo(() => {
    const {educatorId} = useParams();
    const {isLoading, isSuccess, isError, data, error, refetch} = useQuery(
        ['educator', educatorId],
        getEducator(educatorId),
        QUERY_CONFIG
    );

    return (
        <MainContent cssClass="page__mainContainer" title="Преподаватель">
            {isLoading && <EducatorInnerLoading />}

            {isSuccess && (
                <EducatorInner
                    image={data.data.imageName}
                    id={data.data.id}
                    name={data.data.name}
                    position={data.data.position}
                    educationLevel={data.data.educationLevel}
                    tel={data.data.tel}
                    email={data.data.email}
                    coursesTaught={data.data.coursesTaught}
                />
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </MainContent>
    );
});
