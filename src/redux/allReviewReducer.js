export const ADD_REVIEW = "ADD_REVIEW";
export const SET_CURRENT_REVIEW_EMAIL = "SET_CURRENT_REVIEW_EMAIL";
export const SET_CURRENT_REVIEW_TITLE = "SET_CURRENT_REVIEW_TITLE";
export const SET_CURRENT_REVIEW_MESSAGE = "SET_CURRENT_REVIEW_MESSAGE";
export const INIT_REVIEWS = 'INIT_REVIEWS';

export const addReviewActionCreator = () => ({type: ADD_REVIEW});
export const setCurrentReviewMessageActionCreator = value => ({type:SET_CURRENT_REVIEW_MESSAGE, fieldValue: value});
export const setCurrentReviewEmailActionCreator = value => ({type:SET_CURRENT_REVIEW_EMAIL, fieldValue: value});
export const setCurrentReviewTitleActionCreator = value => ({type:SET_CURRENT_REVIEW_TITLE, fieldValue: value});
export const reviewInitAC = value => ({type:INIT_REVIEWS, posts: value});

let initialState = {
    currentUser:  {
        email: "",
        name: "",
        body: ""
    },
    reviews: []
};

if (localStorage.getItem('allReviewReducer')) {
    try {
        initialState = JSON.parse(localStorage.getItem('allReviewReducer'));
    } catch (e) {
        console.warn(e);
    }
}

const allReviewReducer = (state = initialState, action = {}) => {
    let oldState = {...state};
    oldState.currentUser = {...state.currentUser};
    oldState.reviews = [...oldState.reviews]
    oldState.reviews = oldState.reviews.map(el=>({...el}));

    switch (action.type) {
        case ADD_REVIEW: {
            if (oldState.currentUser.email !== "") {
                if (oldState.currentUser.title !== "") {
                    if (oldState.currentUser.message !== "") {
                        oldState.reviews.push({
                            id: oldState.reviews.length + 1,
                            postId: 5,
                            ...oldState.currentUser
                        })
                        oldState.currentUser.email = "";
                        oldState.currentUser.name = "";
                        oldState.currentUser.body = "";
                    }
                }
            }
            localStorage.setItem('allReviewReducer', JSON.stringify(oldState));
            return oldState;
        }
        case SET_CURRENT_REVIEW_EMAIL: {
            const lastChar = action.fieldValue[action.fieldValue.length - 1];

            if (lastChar === " " || isNaN(Number(lastChar))){
                oldState.currentUser.email = action.fieldValue;
            }
            return oldState;
        }
        case SET_CURRENT_REVIEW_TITLE: {
            oldState.currentUser.name = action.fieldValue;
            return oldState;
        }
        case SET_CURRENT_REVIEW_MESSAGE: {
            oldState.currentUser.body = action.fieldValue;
            return oldState;
        }
        case INIT_REVIEWS: {
            return {
                ...state,
                reviews: action.posts
            }
        }
        default: {
            console.warn(`Has not this ${action.type} action.type`)
            return oldState;
        }
    }
}

export default allReviewReducer;