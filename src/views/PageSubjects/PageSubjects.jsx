import React, {memo} from 'react';
import {SidebarNews} from "../../components/SidebarNews/SidebarNews";
import {MainContentSubjects} from "../../components/MainContentSubjects/MainContentSubjects";

export const PageSubjects = memo(({}) => {
    return (
        <div className="page r-container">
            <SidebarNews />
            <MainContentSubjects />
        </div>
    )
})