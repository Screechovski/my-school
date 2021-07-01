//react
import React from 'react';
import { NavLink } from 'react-router-dom';
//components
import RShortText from './../shortText/shortText';
//css
import css from './newsCard.module.sass';
//state   
import state from './../../redux/state';


const newsCard = (props) => {
    const post = state.getPost(props.id);
    
    return (
        <article data-id={props.id} className={css['news-card']} title={`Нажмите чтоб перейти на новость ${post.title.substring(0, 10).trim()}...`}>
            <NavLink to={"/news-inner/"+props.id} className={css['news-card__inner']}>
                <div className={css["news-card__image-wrap"]}>
                    <img alt="Картинка" src={post.mainImgUrl} className={css["news-card__image"]}/>
                </div>
                <span className={css['news-card__date']}>{post.date}</span>

                <header>
                    <RShortText parentClass={css['news-card__title']} tagName="h3" lineCount="2" lineHeight={1.3} text={post.title}/>
                </header>
                
                <RShortText parentClass={css['news-card__text']} tagName="p" lineCount="3"lineHeight={1.2} text={post.body[0].content}/>
            </NavLink>
        </article>
    );
}

export default newsCard;