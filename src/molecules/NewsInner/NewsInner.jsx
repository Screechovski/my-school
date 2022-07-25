import React, { memo } from "react";
import css from "./NewsInner.module.sass";

export const NewsInner = memo(({
    image,
    title,
    date,
    message
}) => {
    return (
        <article className={css.newsInner}>
            <header className={css.newsInner__header + " " + css.newsInnerHeader}>
                <img className={css.newsInnerHeader__image} src={image} alt="asd" />
                <div className={css.newsInnerHeader__content}>
                    <h2 className={css.newsInnerHeader__title}>{title}</h2>
                    <span className={css.newsInnerHeader__date}>{date}</span>
                </div>
            </header>
            <p className={css.newsInner__text}>{message}</p>
        </article>
    )
})

export const NewsInnerLoading = memo(() => {
    return (
        <div className={css.newsInnerLoading}>
            <div className={css.newsInner__header + " " + css.newsInnerHeader}>
                <div className={css.newsInnerHeader__image + " loading"} />
                <div className={css.newsInnerLoading__content}>
                    <div className={css.newsInnerLoading__title + " loading"} />
                    <div className={css.newsInnerLoading__date + " loading"} />
                </div>
            </div>
            <div className={css.newsInnerLoading__text + " loading"} />
        </div>
    )
})