import ReviewWrap from './reviewWrap'
import {connect} from "react-redux";
import { reviewInitAC } from '../../redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        reviews: state.allUsersReview.reviews,
        reviewsLoading: state.allUsersReview.reviewsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initReview: (posts) => {
            dispatch(reviewInitAC(posts));
        }
    }
}

const reviewWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewWrap);

export default reviewWrapContainer;