//react
import React from 'react';
//css
import './reviewCard.sass';


const reviewCard = ({email, title, message}) => {
    return (
        <article className="review-card">
            <h3 className="review-card__title">{email}</h3>
            <h4 className="review-card__subtitle">{title}</h4>
            <p className="review-card__text">{message}</p>
        </article>
    );
}

export default reviewCard;