//react
import React from 'react';
//css
import './reviewCard.sass';


const reviewCard = ({email, title, message, createdTime, loading}) => {
    return (
        <article className="review-card">
            <h4 className={`review-card__title ${loading ? 'loading' : ''}`}>{title}</h4>
            <p className={`review-card__text ${loading ? 'loading' : ''}`}>{createdTime.slice(0, 10)}</p>
            <h3 className={`review-card__subtitle ${loading ? 'loading' : ''}`}>{email}</h3>
            <p className={`review-card__text ${loading ? 'loading' : ''}`}>{message}</p>
        </article>
    );
}

export default reviewCard;