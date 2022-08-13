import React, {memo} from "react";
import {useParams} from "react-router-dom";
import {SubjectInner} from "../../molecules/SubjectInner/SubjectInner";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useQuery} from "@tanstack/react-query";
import {subjectQuery, subjectsQuery} from "../../queryes/subjects";

export const MainContentSubjectInner = memo(() => {
    const {subjectId} = useParams();
    const all = useQuery(["subjects"], subjectsQuery);
    const current = useQuery(["subject", subjectId], subjectQuery(subjectId));

    const title = current.isSuccess
        ? current.data.data.subject.title
        : "Предмет...";

    return (
        <MainContent cssClass="page__mainContainer" title={title}>
            {(current.isLoading || all.isLoading) && "Loading"}

            {all.isSuccess && current.isSuccess && (
                <SubjectInner
                    description={current.data.data.subject.description}
                    educators={current.data.data.educators}
                    subjects={all.data.data}
                    subjectId={current.data.data.subject.id}
                />
            )}

            {current.isError && (
                <ErrorLine
                    message={current.error.error}
                    reload={current.refetch}
                />
            )}

            {all.isError && (
                <ErrorLine message={all.error.error} reload={all.refetch} />
            )}
        </MainContent>
    );
});
