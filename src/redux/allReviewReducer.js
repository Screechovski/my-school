import { 
    ADD_REVIEW, 
    INIT_REVIEWS, 
    SET_CURRENT_REVIEW_EMAIL, 
    SET_CURRENT_REVIEW_MESSAGE, 
    SET_CURRENT_REVIEW_TITLE 
} from "./actionTypes";

let initialState = {
    currentUser:  {
        email: "",
        name: "",
        body: ""
    },
    reviews: [{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"1"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"2"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"3"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"4"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"5"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"6"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"7"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"8"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"9"
    },{
        createdAt:"",
        name:"",
        email:"",
        title:"",
        body:"",
        id:"10"
    }],
    reviewsLoading: true
};

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
                        /*oldState.reviews.push({
                            id: oldState.reviews.length + 1,
                            postId: 5,
                            ...oldState.currentUser
                        })*/

                        

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
                reviews: action.posts,
                reviewsLoading: false
            }
        }
        default: {
            console.warn(`Has not this ${action.type} action.type`)
            return oldState;
        }
    }
}

export default allReviewReducer;