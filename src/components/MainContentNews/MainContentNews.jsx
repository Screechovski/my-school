import React, {PureComponent} from "react";
import css from "./MainContentNews.module.sass";
import {getNumberArray} from "../../assets/helper";
import {NewsCard, NewsCardLoading} from "../../molecules/NewsCard/NewsCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {bindActionCreators} from "redux";
import {newsInit} from "../../store/news/newsActions";
import {connect} from "react-redux";

class MainContentNewsInner extends PureComponent {
    componentDidMount() {
        const {
            newsReducer: {
                inited: newsInited,
                loading: newsLoading
            },
            newsInit,
        } = this.props;

        if (!newsInited && !newsLoading) newsInit();
    }

    render() {
        const {
            newsReducer: {
                inited: newsInited,
                loading: newsLoading,
                error: newsError,
                news
            },
            newsInit
        } = this.props;

        return (
            <MainContent
                cssClass="page__mainContainer"
                title="Новости"
            >
                {newsLoading &&
                    <ul className={css.mainContentNews__list}>
                        {getNumberArray(20).map(id =>
                            <li key={id}>
                                <NewsCardLoading />
                            </li>)}
                    </ul>}

                {newsInited &&
                    <ul className={css.mainContentNews__list}>
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
                        message={newsError}
                        reload={newsInit}
                    />}
            </MainContent>
        )
    }
}

const mapStateToProps = state => ({
    newsReducer: state.newsReducer
})

const mapDispatchToProps = dispatch => ({
    newsInit: bindActionCreators(newsInit, dispatch)
})

export const MainContentNews = connect(mapStateToProps, mapDispatchToProps)(MainContentNewsInner);