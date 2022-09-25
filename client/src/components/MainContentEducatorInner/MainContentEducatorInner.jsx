import React, {memo} from "react";
import {
    EducatorInner,
    EducatorInnerLoading
} from "../../molecules/EducatorInner/EducatorInner";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {educatorQuery} from "../../queryes/educators";
import {queryConfig} from "../../assets/helper";

export const MainContentEducatorInner = memo(() => {
    const {educatorId} = useParams();
    const {isLoading, isSuccess, isError, data, error, refetch} = useQuery(
        ["educator", educatorId],
        educatorQuery(educatorId),
        queryConfig
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
