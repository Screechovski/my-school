//react
import React from 'react';
//css
import './reviewCard.sass';
//state   
import state from './../../redux/state';


const reviewCard = (props) => {
    const review = state.getReview(props.reviewId);
    
    return (
        <div className="review-card">
            <p>{review.id}</p>
            <p>{review.userName}</p>
            <p>{review.title}</p>
            <p>{review.message}</p>
        </div>
    );
}

export default reviewCard;