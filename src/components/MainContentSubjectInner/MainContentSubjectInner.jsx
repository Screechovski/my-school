import React, {memo, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {SubjectInner} from "../../molecules/SubjectInner/SubjectInner";
import {subjectInnerHook} from "../../store/subjectInner/subjectInnerHook";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {subjectInnerInit} from "../../store/subjectInner/subjectInnerActions";
import {useQuery} from "@tanstack/react-query";
import {subjectsQuery} from "../../queryes/subjects";

export const MainContentSubjectInner = memo(() => {
    const {subjectId} = useParams();
    const {
        subjectInnerInited,
        subjectInnerLoading,
        subjectInnerError,
        subjectInner,
        subjectInnerEducators
    } = subjectInnerHook(subjectId);
    const all = useQuery(["subjects"], subjectsQuery);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!subjectInnerInited && !subjectInnerLoading)
            dispatch(subjectInnerInit(subjectId));
    }, []);

    const title = subjectInnerInited ? subjectInner.title : "Предмет...";

    return (
        <MainContent cssClass="page__mainContainer" title={title}>
            {(subjectInnerLoading || all.isLoading) && "Loading"}

            {all.isSuccess && subjectInnerInited && (
                <SubjectInner
                    title={null}
                    educators={subjectInnerEducators}
                    subjects={all.data.data}
                    subjectId={subjectInner.id}
                />
            )}

            {subjectInnerError && (
                <ErrorLine
                    message={subjectInnerError}
                    reload={() => dispatch(subjectInnerInit(subjectId))}
                />
            )}

            {all.isError && (
                <ErrorLine message={all.error.error} reload={all.refetch} />
            )}
        </MainContent>
    );
});
