//react
import React from 'react';
//css
import css from './newsInnerContent.module.sass';

const newsInnerContent = ({mainImgUrl, title, date, body}) => {
    const postBody = body.map(elem=>{
        if (elem.type === "text"){
            return (
                <p>{elem.content}</p>
            )
        } else {
            return (
                <div>
                    <span>{elem.content.size}</span>
                    <span>{elem.content.position}</span>
                    <img src={elem.content.url} alt="asd" />
                </div>
            )
        }
    });
    
    return (
        <article className={css["news-inner"]}>
            <header className={css["news-inner__header"] + " " + css["news-inner-header"]}>
                <img className={css["news-inner-header__image"]} src={mainImgUrl} alt="asd" />
                <div className={css["news-inner-header__content"]}>
                    <h2 className={css["news-inner-header__title"]}>{title}</h2>
                    <span className={css["news-inner-header__date"]}>{date}</span>
                </div>                
            </header>            
            {postBody}
        </article>
    )
}

export default newsInnerContent;