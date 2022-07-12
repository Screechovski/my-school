//react
import React from 'react';
//css
import './reviewWrap.sass';
//components
import RReviewCard from './../reviewCard/reviewCard';
import URLS from '../../assets/urls';

export default class ReviewWrap extends React.Component {
    componentDidMount() {
        fetch(URLS.reviews)
            .then(r => r.json())
            .then(d => d.slice(0, 20))
            .then(this.props.initReview)
            .catch(console.warn)
    }
    render() {
        const { reviews, reviewsLoading } = this.props;

        return (
            <div className="review-wrap">
                {reviews.map(({ id, createdAt, name, email, body }) =>
                    <RReviewCard
                        key={id}
                        id={id}
                        createdTime={createdAt}
                        title={name}
                        email={email}
                        message={body}
                        loading={reviewsLoading}
                    />
                )}
            </div>
        );
    }
}