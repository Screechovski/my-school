//react
import React from 'react';
//css
import './reviewWrap.sass';
//components
import RReviewCard from './../reviewCard/reviewCard'
//state   
import state from './../../redux/state';


const reviewWrap = (props) => {
    const reviews = state.getReview().map(review=><RReviewCard key={review.id} reviewId={review.id}/>);
    
    return (
        <div className="review-wrap">
            {reviews}
        </div>
    );
}

export default reviewWrap;