import React, { memo } from "react";
import {SidebarNews} from "../../components/SidebarNews/SidebarNews";
import {MainContentEducators} from "../../components/MainContentEducators/MainContentEducators";

export const PageEducators = memo(() => {
    return (
        <div className="page r-container">
            <SidebarNews />
            <MainContentEducators />
        </div>
    )
})