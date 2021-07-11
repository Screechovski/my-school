import ReviewWrap from './reviewWrap'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        reviews: state.allUsersReview.reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const reviewWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewWrap);

export default reviewWrapContainer;