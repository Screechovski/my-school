import React from "react";
import {SidebarNews} from "../../components/SidebarNews/SidebarNews";
import {MainContentNewsInner} from "../../components/MainContentNewsInner/MainContentNewsInner";

export const PageNewsInner = ({}) => {
    return (
        <div className="page r-container">
            <SidebarNews />
            <MainContentNewsInner />
        </div>
    )
}
