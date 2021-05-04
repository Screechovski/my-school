import React from 'react';
import RShortText from './../shortText/shortText';
import css from './newsCard.module.sass';


const newsCard = (props) => {
    console.log(props.id);

    return (
        <article data-id={props.id} className={css['news-card']}>
            <a href={props.linkUrl} title={`Нажмите чтоб перейти на новость ${props.title.substring(0, 10).trim()}...`} className={css['news-card__inner']}>
                {
                    // props.imgUrl.trim() !== "" &&
                    // <div className={css.newsCard__imageWrap}>
                    //     <img src={props.imgUrl} className={css.newsCard__image}/>
                    // </div>
                }
                <span className={css['news-card__date']}>{props.date}</span>
                <header>
                    <RShortText parentClass={css['news-card__title']} tagName="h3" lineCount="2" lineHeight={1.3} text={props.title}/>
                </header>
                <RShortText parentClass={css['news-card__text']} tagName="p" lineCount="3"lineHeight={1.2} text={props.text}/>
            </a>
        </article>
    );
}

export default newsCard;