import React from "react";
import {NavLink} from "react-router-dom";
import css from "./NewsCard.module.sass";
import {ShortText} from "../ShortText/ShortText";

export const NewsCard = ({title, id, date, body, mainImgUrl}) => {
    return (
        <article
            className={css.newsCard}
            title={`Нажмите чтоб перейти на новость ${title
                .substring(0, 10)
                .trim()}...`}
        >
            <NavLink to={"/news-inner/" + id} className={css.newsCard__inner}>
                <div className={css.newsCard__imageWrap}>
                    <img
                        alt="Картинка"
                        src={mainImgUrl}
                        className={css.newsCard__image}
                    />
                </div>
                <span className={css.newsCard__date}>{date}</span>

                <header>
                    <ShortText
                        parentClass={css.newsCard__title}
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
