export const ADD_REVIEW = "ADD_REVIEW";
export const SET_CURRENT_REVIEW_NAME = "SET_CURRENT_REVIEW_NAME";
export const SET_CURRENT_REVIEW_TITLE = "SET_CURRENT_REVIEW_TITLE";
export const SET_CURRENT_REVIEW_MESSAGE = "SET_CURRENT_REVIEW_MESSAGE";

export const addReviewActionCreator = () => ({type: ADD_REVIEW});
export const setCurrentReviewMessageActionCreator = value => ({type:SET_CURRENT_REVIEW_MESSAGE, fieldValue: value});
export const setCurrentReviewNameActionCreator = value => ({type:SET_CURRENT_REVIEW_NAME, fieldValue: value});
export const setCurrentReviewTitleActionCreator = value => ({type:SET_CURRENT_REVIEW_TITLE, fieldValue: value});

const allReviewReducer = (state, action) => {
    const { currentUser, reviews } = state;
    switch (action.type) {
        case ADD_REVIEW:
            if (currentUser.userName !== "") {
                if (currentUser.title !== "") {
                    if (currentUser.message !== "") {
                        reviews.push({
                            id: reviews.length,
                            ...currentUser
                        })
                        currentUser.userName = "";
                        currentUser.title = "";
                        currentUser.message = "";
                    }
                }
            }
            return state;
        case SET_CURRENT_REVIEW_NAME:
            const lastChar = action.fieldValue[action.fieldValue.length - 1];

            if (lastChar == " " || isNaN(Number(lastChar))){
                currentUser.userName = action.fieldValue;
            }
            return state;
        case SET_CURRENT_REVIEW_TITLE:
            currentUser.title = action.fieldValue;
            return state;
        case SET_CURRENT_REVIEW_MESSAGE:
            currentUser.message = action.fieldValue;
            return state;
        default:
            console.warn(`Has not this ${action.type} action.type`)
            return state;
    }
}

export default allReviewReducer;