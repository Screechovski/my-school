import React from 'react';
import {SidebarNews} from "../../components/SidebarNews/SidebarNews";
import {MainContentSubjectInner} from "../../components/MainContentSubjectInner/MainContentSubjectInner";

export const PageSubjectInner = ({}) => {
    return (
        <div className="page r-container">
            <SidebarNews />
            <MainContentSubjectInner />
        </div>
    )
}