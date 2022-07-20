import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {newsInit} from "../../store/news/newsActions";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {NewsCard} from "../../molecules/NewsCard/NewsCard";

import css from "./PageNews.module.sass";

class PageNewsPure extends React.PureComponent {
    componentDidMount(){
        const { inited, newsInit } = this.props;

        !inited && newsInit();
    }

    render(){
        const { news, inited } = this.props;

        return (
            <div className={css.pageNews + " r-container"}>
                <MainContent
                    parentClass={css.pageNews__mainContainer}
                    title="Новости"
                    typeContent="news"
                >
                    {!inited && "Loading..."}

                    {inited &&
                        <ul className={css.pageNews__list}>
                            {news.map(({
                               title,
                               id,
                               date,
                               message,
                               image
                            }) =>
                                <li className={css.pageNews__item}>
                                    <NewsCard
                                        title={title}
                                        id={id}
                                        date={date}
                                        body={message}
                                        mainImgUrl={image}
                                    />
                                </li>)}
                        </ul>}
                </MainContent>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.newsReducer
})

const mapDispatchToProps = dispatch => ({
    newsInit: bindActionCreators(newsInit, dispatch)
})

export const PageNews = connect(mapStateToProps, mapDispatchToProps)(PageNewsPure);