import {combineReducers, createStore} from "redux";
import subjectsReducer from "./subjectsReducer";
import educatorsReducer from "./educatorsReducer";
import postsReducer from "./postsReducer";
import navLinkReducer from "./navLinksReducer";
import allReviewReducer from "./allReviewReducer";

let reducers = combineReducers({
    subjects: subjectsReducer,
    educators: educatorsReducer,
    posts: postsReducer,
    navLinks: navLinkReducer,
    allUsersReview: allReviewReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;