import { ADD_REVIEW, INIT_POSTS, INIT_REVIEWS, SET_CURRENT_REVIEW_EMAIL, SET_CURRENT_REVIEW_MESSAGE, SET_CURRENT_REVIEW_TITLE } from "./actionTypes";

export const addReviewActionCreator = () => ({type: ADD_REVIEW});
export const setCurrentReviewMessageActionCreator = value => ({type:SET_CURRENT_REVIEW_MESSAGE, fieldValue: value});
export const setCurrentReviewEmailActionCreator = value => ({type:SET_CURRENT_REVIEW_EMAIL, fieldValue: value});
export const setCurrentReviewTitleActionCreator = value => ({type:SET_CURRENT_REVIEW_TITLE, fieldValue: value});
export const reviewInitAC = value => ({type:INIT_REVIEWS, posts: value});
export const initPostsAC = posts => ({type: INIT_POSTS, posts});