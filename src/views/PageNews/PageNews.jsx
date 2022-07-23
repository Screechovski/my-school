import React from 'react';
import {SidebarEvents} from "../../components/SidebarEvents/SidebarEvents";
import {MainContentNews} from "../../components/MainContentNews/MainContentNews";

export class PageNews extends React.PureComponent {
    render() {
        return (
            <div className="page r-container">
                <SidebarEvents />
                <MainContentNews />
            </div>
        )
    }
}