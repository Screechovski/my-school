import React from "react";
import {SidebarProfile} from "../../components/SidebarProfile/SidebarProfile";
import {MainContentProfileInner} from "../../components/MainContentProfileInner/MainContentProfileInner";

export const PageProfile = ({}) => {
    return (
        <div className="page r-container">
            <SidebarProfile />
            <MainContentProfileInner />
        </div>
    )
}
