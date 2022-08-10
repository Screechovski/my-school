import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {authFormReducer} from "./authForm/authFormReducer";
import {registerFormReducer} from "./registerForm/registerFormReducer";

const reducers = combineReducers({
    registerFormReducer,
    authFormReducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (f) => f({thunk}),
    devTools: process.env.NODE_ENV !== "production"
});
