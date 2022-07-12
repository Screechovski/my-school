//react
import React from 'react';
import { NavLink } from 'react-router-dom';
//components
import RShortText from './../shortText/shortText';
//css
import css from './newsCard.module.sass';


const newsCard = ({ title, id, date, body, mainImgUrl, loading }) => {
    return (
        <article data-id={id} className={css['news-card']} title={`Нажмите чтоб перейти на новость ${title.substring(0, 10).trim()}...`}>
            <NavLink to={"/news-inner/" + id} className={css['news-card__inner']}>
                <div className={`${css["news-card__image-wrap"]} ${loading ? 'loading' : ''}`}>
                    <img alt="Картинка" src={mainImgUrl} className={css["news-card__image"]} />
                </div>
                <span className={`${css['news-card__date']} ${loading ? 'loading' : ''}`}>{date}</span>

                <header>
                    <RShortText parentClass={`${css['news-card__title']} ${loading ? 'loading' : ''}`} tagName="h3" lineCount="2" lineHeight={1.3} text={title} />
                </header>

                <RShortText parentClass={`${css['news-card__text']} ${loading ? 'loading' : ''}`} tagName="p" lineCount="3" lineHeight={1.2} text={body} />
            </NavLink>
        </article>
    );
}

export default newsCard;