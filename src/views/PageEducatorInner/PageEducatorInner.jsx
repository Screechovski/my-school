import React, {memo} from 'react';
import {SidebarEvents} from "../../components/SidebarEvents/SidebarEvents";
import {MainContentEducatorInner} from "../../components/MainContentEducatorInner/MainContentEducatorInner";

export const PageEducatorInner = memo(() => {
    return (
        <div className="page r-container">
            <SidebarEvents />
            <MainContentEducatorInner />
        </div>
    )
})