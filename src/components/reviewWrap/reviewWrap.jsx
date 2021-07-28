//react
import React from 'react';
//css
import './reviewWrap.sass';
//components
import RReviewCard from './../reviewCard/reviewCard';


export default class ReviewWrap extends React.Component{
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then(d=>d.slice(0, 20))
            .then(this.props.initReview)
            .catch(console.warn)
    }
    render(){
        const {reviews} = this.props;

        return (
            <div className="review-wrap">
                {reviews.map(review=>
                    <RReviewCard
                        key={review.id}
                        id={review.id}
                        title={review.name}
                        email={review.email}
                        message={review.body}
                    />
                )}
            </div>
        );
    }
}