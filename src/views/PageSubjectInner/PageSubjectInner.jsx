import React, {memo} from 'react';
import {SidebarNews} from "../../components/SidebarNews/SidebarNews";
import {MainContentSubjectInner} from "../../components/MainContentSubjectInner/MainContentSubjectInner";

export const PageSubjectInner = memo(({}) => {
    return (
        <div className="page r-container">
            <SidebarNews />
            <MainContentSubjectInner />
        </div>
    )
})