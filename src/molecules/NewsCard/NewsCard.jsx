import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';
import css from './NewsCard.module.sass';
import {ShortText} from "../ShortText/ShortText";

export const NewsCard = memo(({
    title,
    id,
    date,
    body,
    mainImgUrl
}) => {
    return (
        <article className={css['news-card']} title={`Нажмите чтоб перейти на новость ${title.substring(0, 10).trim()}...`}>
            <NavLink to={"/news-inner/" + id} className={css['news-card__inner']}>
                <div className={`${css["news-card__image-wrap"]} `}>
                    <img alt="Картинка" src={mainImgUrl} className={css["news-card__image"]} />
                </div>
                <span className={`${css['news-card__date']} `}>{date}</span>

                <header>
                    <ShortText parentClass={`${css['news-card__title']} `} tagName="h3" lineCount="2" lineHeight={1.3} text={title} />
                </header>

                <ShortText parentClass={`${css['news-card__text']}`} tagName="p" lineCount="3" lineHeight={1.2} text={body} />
            </NavLink>
        </article>
    );
})