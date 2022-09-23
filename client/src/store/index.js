import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {alertsReducer} from "./alerts/alertsSlice";
import {authFormReducer} from "./authForm/authFormSlice";
import {registerFormReducer} from "./registerForm/registerFormSlice";
import {userReducer} from "./user/userSlice";
import {resetPasswordFormReducer} from "./resetPasswordForm/resetPasswordFormSlice";

const reducers = combineReducers({
    registerFormReducer,
    alertsReducer,
    authFormReducer,
    userReducer,
    resetPasswordFormReducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (f) => f({thunk}),
    devTools: process.env.NODE_ENV !== "production"
});