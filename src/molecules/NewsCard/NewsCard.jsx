import React from 'react';
import { NavLink } from 'react-router-dom';
import ShortText from '@/molecules/shortText/shortText';
import css from './NewsCard.module.sass';

const NewsCard = (props) => {
    const { title, id, date, body, mainImgUrl } = props;

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
}

export default NewsCard;