//components
import MessageForm from './messageForm';
//reducers
import {
    addReviewActionCreator,
    setCurrentReviewEmailActionCreator,
    setCurrentReviewMessageActionCreator,
    setCurrentReviewTitleActionCreator
} from '../../redux/actionCreators';
//react-redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        email: state.allUsersReview.email,
        title: state.allUsersReview.title,
        message: state.allUsersReview.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerSetCurrentReviewEmail: value => {
            dispatch(setCurrentReviewEmailActionCreator(value));
        },
        handlerSetCurrentReviewTitle: value => {
            dispatch(setCurrentReviewTitleActionCreator(value));
        },
        handlerSetCurrentReviewMessage: value => {
            dispatch(setCurrentReviewMessageActionCreator(value));
        },
        handlerSendForm: () => {
            dispatch(addReviewActionCreator());
        }
    }
}

const messageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm);

export default messageFormContainer;