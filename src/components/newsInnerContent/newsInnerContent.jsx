//react
import React from 'react';
//css
import './newsInnerContent.sass';

const newsInnerContent = ({mainImgUrl, title, date, body}) => {
    const postBody = body.map((elem, index)=>{
        if (elem.type === "text"){
            return (
                <p key={index} className="news-inner__text">{elem.content}</p>
            )
        } else {
            return (
                <img key={index} className="news-inner-img" data-position={elem.content.position} data-size={elem.content.size} src={elem.content.url} alt="asd"/>
            )
        }
    });
    
    return (
        <article className="news-inner">
            <header className="news-inner__header news-inner-header">
                <img className="news-inner-header__image" src={mainImgUrl} alt="asd" />
                <div className="news-inner-header__content">
                    <h2 className="news-inner-header__title">{title}</h2>
                    <span className="news-inner-header__date">{date}</span>
                </div>                
            </header>            
            {postBody}
        </article>
    )
}

export default newsInnerContent;