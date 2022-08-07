import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
// import {newsReducer} from "./news/newsReducer";
// import {eventsReducer} from "./events/eventsReducer";
// import {subjectsReducer} from "./subjects/subjectsReducer";
// import {educatorsReducer} from "./educators/educatorsReducer";
import {educatorInnerReducer} from "./educatorInner/educatorInnerReducer";
import {newsInnerReducer} from "./newsInner/newsInnerReducer";
import {subjectInnerReducer} from "./subjectInner/subjectInnerReducer";

const reducers = combineReducers({
    // newsReducer,
    // eventsReducer,
    // subjectsReducer,
    // educatorsReducer,
    educatorInnerReducer,
    newsInnerReducer,
    subjectInnerReducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (f) => f({thunk}),
    devTools: process.env.NODE_ENV !== "production"
});
