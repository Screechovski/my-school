import React, {memo, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {SubjectInner} from "../../molecules/SubjectInner/SubjectInner";
import {subjectInnerHook} from "../../store/subjectInner/subjectInnerHook";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {subjectInnerInit} from "../../store/subjectInner/subjectInnerActions";
import {subjectsHook} from "../../store/subjects/subjectsHook";
import {subjectsInit} from "../../store/subjects/subjectsActions";

export const MainContentSubjectInner = memo(() => {
    const { subjectId } = useParams();
    const { subjectInnerInited, subjectInnerLoading, subjectInnerError, subjectInner, subjectInnerEducators } = subjectInnerHook(subjectId);
    const { subjectsInited, subjectsLoading, subjectsError, subjects } = subjectsHook();
    const dispatch = useDispatch()

    useEffect(() => {
        if (!subjectInnerInited && !subjectInnerLoading) dispatch(subjectInnerInit(subjectId));
        if (!subjectsInited && !subjectsLoading) dispatch(subjectsInit());
    }, [])

    const title = subjectInnerInited ? subjectInner.title : "Предмет...";

    return (
        <MainContent
            cssClass="page__mainContainer"
            title={title}
        >
            {(subjectInnerLoading || subjectsLoading) && "Loading"}

            {subjectsInited && subjectInnerInited &&
                <SubjectInner
                    title={null}
                    educators={subjectInnerEducators}
                    subjects={subjects}
                    subjectId={subjectInner.id}
                />}

            {subjectInnerError &&
                <ErrorLine
                    message={subjectInnerError}
                    reload={() => dispatch(subjectInnerInit(subjectId))}
                />}

            {subjectsError &&
                <ErrorLine
                    message={subjectsError}
                    reload={() => dispatch(subjectsInit())}
                />}
        </MainContent>
    )
})