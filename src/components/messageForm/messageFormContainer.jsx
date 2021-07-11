//components
import MessageForm from './messageForm';
//reducers
import {
    addReviewActionCreator,
    setCurrentReviewMessageActionCreator,
    setCurrentReviewNameActionCreator,
    setCurrentReviewTitleActionCreator
} from "../../redux/allReviewReducer";
//react-redux
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        userName: state.allUsersReview.userName,
        title: state.allUsersReview.title,
        message: state.allUsersReview.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerSetCurrentReviewName: value => {
            dispatch(setCurrentReviewNameActionCreator(value));
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