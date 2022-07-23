import React, {memo, useEffect} from "react";
import {EducatorInner, EducatorInnerLoading} from "../../molecules/EducatorInner/EducatorInner";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {educatorInnerInit} from "../../store/educatorInner/educatorInnerActions";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {educatorInnerHook} from "../../store/educatorInner/educatorInnerHook";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

export const MainContentEducatorInner = memo(() => {
    const { educatorId } = useParams();
    const { educatorInnerInited, educatorInnerLoading, educatorInnerError, educatorInner } = educatorInnerHook(educatorId);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!educatorInnerInited && !educatorInnerLoading && !educatorInnerError) dispatch(educatorInnerInit(educatorId));
    }, [])

    return (
        <MainContent
            cssClass="page__mainContainer"
            title="Преподаватель"
        >
            {educatorInnerLoading && <EducatorInnerLoading />}

            {educatorInnerInited &&
                <EducatorInner
                    image={educatorInner.imageName}
                    id={educatorInner.id}
                    name={educatorInner.name}
                    position={educatorInner.position}
                    educationLevel={educatorInner.educationLevel}
                    tel={educatorInner.tel}
                    email={educatorInner.email}
                    coursesTaught={educatorInner.coursesTaught}
                />}

            {educatorInnerError &&
                <ErrorLine
                    message={educatorInnerError}
                    reload={() => dispatch(educatorInnerInit(educatorId))}
                />}
        </MainContent>
    )
})