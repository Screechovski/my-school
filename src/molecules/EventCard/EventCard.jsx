import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';
import css from './EventCard.module.sass';
import {ShortText} from "../ShortText/ShortText";

export const EventCard = memo(({
    title,
    id,
    date,
    body
}) => {
    return (
        <article className={css.eventCard} title={`Нажмите чтоб перейти на событие ${title.substring(0, 10).trim()}...`}>
            <NavLink to={"/event-inner/" + id} className={css.eventCard__inner}>
                <span className={css.eventCard__date}>{date}</span>

                <header>
                    <ShortText
                        parentClass={css.eventCard__title}
                        tagName="h3"
                        lineCount="2"
                        lineHeight={1.3}
                        text={title}
                    />
                </header>

                <ShortText
                    parentClass={css.eventCard__text}
                    tagName="p"
                    lineCount="5"
                    lineHeight={1.2}
                    text={body}
                />
            </NavLink>
        </article>
    );
})

export const EventCardLoading = memo(() => {
    return (
        <div className={css.eventCardLoading}>
            <div className={css.eventCardLoading__date + " loading"} />
            <div className={css.eventCardLoading__title + " loading"} />
            <div className={css.eventCardLoading__text + " loading"} />
        </div>
    )
})