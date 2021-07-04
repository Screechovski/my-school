//react
import React from 'react';
//css
import './reviewCard.sass';


const reviewCard = ({id, userName, title, message}) => {    
    return (
        <div className="review-card">
            <p>{id}</p>
            <p>{userName}</p>
            <p>{title}</p>
            <p>{message}</p>
        </div>
    );
}

export default reviewCard;