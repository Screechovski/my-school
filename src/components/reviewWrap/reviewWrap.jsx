//react
import React from 'react';
//css
import './reviewWrap.sass';
//components
import RReviewCard from './../reviewCard/reviewCard';


const reviewWrap = ({reviews}) => {    
    return (
        <div className="review-wrap">
            {reviews.map(review=>
                <RReviewCard 
                    key={review.id} 
                    id={review.id}
                    userName={review.userName}
                    title={review.title}
                    message={review.message}                
                />
            )}
        </div>
    );
}

export default reviewWrap;