import { combineReducers } from "redux";
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { reviewReducer } from "./review/reviewReducer";
import { newsReducer } from './news/newsReducer';
import {eventsReducer} from "./events/eventsReducer";

const reducers = combineReducers({
    newsReducer,
    reviewReducer,
    eventsReducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: f => f({ thunk }),
    devTools: process.env.NODE_ENV !== 'production',
})