import React from "react";
import {NavLink} from "react-router-dom";
import css from "./NewsCard.module.sass";
import {ShortText} from "../ShortText/ShortText";
import {prettyBackendDate} from "../../assets/helper";

export const NewsCard = ({title, id, date, body, image}) => {
    return (
        <article
            className={css.newsCard}
            title={`Нажмите чтоб перейти на новость ${title
                .substring(0, 10)
                .trim()}...`}
        >
            <NavLink to={"/news/" + id} className={css.newsCard__inner}>
                <div className={css.newsCard__imageWrap}>
                    <img
                        alt="Картинка"
                        src={image}
                        className={css.newsCard__image}
                    />
                </div>
                <span className={css.newsCard__date}>{prettyBackendDate(date)}</span>

                <header>
                    <ShortText
                        parentClass={css.newsCard__title + " link"}
                        tagName="h3"
                        lineCount="2"
                        lineHeight={1.3}
                        text={title}
                    />
                </header>

                <ShortText
                    parentClass={css.newsCard__text}
                    tagName="p"
                    lineCount="3"
                    lineHeight={1.2}
                    text={body}
                />
            </NavLink>
        </article>
    );
};

export const NewsCardLoading = () => {
    return (
        <div className={css.newsCardLoading}>
            <div className={css.newsCardLoading__image + " loading"} />
            <div className={css.newsCardLoading__date + " loading"} />
            <div className={css.newsCardLoading__title + " loading"} />
            <div className={css.newsCardLoading__text + " loading"} />
        </div>
    );
};
