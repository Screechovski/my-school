import React from "react";
import {SidebarNews} from "../../components/SidebarNews/SidebarNews";
import {MainContentEvents} from "../../components/MainContentEvents/MainContentEvents";

export const PageEvents = () => {
    return (
        <div className="page r-container">
            <SidebarNews />
            <MainContentEvents />
        </div>
    );
};
