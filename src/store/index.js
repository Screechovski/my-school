import {combineReducers, createStore} from "redux";

import subjectsReducer from "./subjectsReducer";
import educatorsReducer from "./educatorsReducer";
import postsReducer from "./postsReducer";
import reviewReducer from "./review/reviewReducer";

let reducers = combineReducers({
    subjects: subjectsReducer,
    educators: educatorsReducer,
    posts: postsReducer,
    review: reviewReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;