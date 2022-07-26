import React, {memo} from "react";
import {SubjectInner} from "../../molecules/SubjectInner/SubjectInner";
import {useParams} from "react-router-dom";

export const MainContentSubjectInner = memo(() => {
    const { subjectId } = useParams();

    return <SubjectInner
        title="test"
        educators={[]}
        subjects={[]}
        subjectId={subjectId}
    />
})