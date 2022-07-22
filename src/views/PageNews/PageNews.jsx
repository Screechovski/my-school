import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {newsInit} from "../../store/news/newsActions";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {NewsCard} from "../../molecules/NewsCard/NewsCard";

import css from "./PageNews.module.sass";
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {eventsInit} from "../../store/events/eventsActions";
import {EventCard} from "../../molecules/EventCard/EventCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";

let fixStrict = true;

class PageNewsPure extends React.PureComponent {
    componentDidMount() {
        if (!fixStrict) return;
        fixStrict = false;
        const {
            newsReducer: {
                inited: newsInited,
                loading: newsLoading
            },
            eventsReducer: {
                inited: eventsInited,
                loading: eventsLoading
            },
            newsInit,
            eventsInit
        } = this.props;

        if (!newsInited && !newsLoading) newsInit();
        if (!eventsInited && !eventsLoading) eventsInit();
    }

    render() {
        const {
            newsReducer: {
                inited: newsInited,
                loading: newsLoading,
                error: newsError,
                news
            }, eventsReducer: {
                inited: eventsInited,
                loading: eventsLoading,
                error: eventsError,
                events
            },
            newsInit,
            eventsInit
        } = this.props;

        return (
            <div className="page r-container">
                <Sidebar
                    title="Мероприятия"
                    cssClass="page__sidebar"
                >
                    {eventsLoading && "Loading..."}

                    {eventsInited && <ul className="page__sidebarList">
                        {events.slice(0, 4).map(({
                            date,
                            id,
                            message,
                            title
                        }) =>
                            <li key={id}>
                                <EventCard
                                    title={title}
                                    id={id}
                                    date={date}
                                    body={message}
                                />
                            </li>)}
                    </ul>}

                    {eventsError &&
                        <ErrorLine
                            message={eventsError}
                            loading={eventsLoading}
                            reload={eventsInit}
                        />}
                </Sidebar>

                <MainContent
                    cssClass="page__mainContainer"
                    title="Новости"
                >
                    {newsLoading && "Loading..."}

                    {newsInited && <ul className={css.pageNews__list}>
                        {news.map(({
                            title,
                            id,
                            date,
                            message,
                            image
                        }) =>
                            <li key={id}>
                                <NewsCard
                                    title={title}
                                    id={id}
                                    date={date}
                                    body={message}
                                    mainImgUrl={image}
                                />
                            </li>)}
                    </ul>}

                    {newsError &&
                        <ErrorLine
                            loading={newsLoading}
                            message={newsError}
                            reload={newsInit}
                        />}
                </MainContent>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    newsReducer: state.newsReducer,
    eventsReducer: state.eventsReducer
})

const mapDispatchToProps = dispatch => ({
    newsInit: bindActionCreators(newsInit, dispatch),
    eventsInit: bindActionCreators(eventsInit, dispatch)
})

export const PageNews = connect(mapStateToProps, mapDispatchToProps)(PageNewsPure);