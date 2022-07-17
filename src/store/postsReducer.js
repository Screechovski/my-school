//import statePostsGenerator from "../assets/statePostsGenerator";
// import { INIT_POSTS } from "./actionTypes";

//const initalState = statePostsGenerator;
const initalState = {
    posts: [
        {
        avatar: "",
        createdAt: "",
        id: "1",
        message: "",
        title: ""
    },{
        avatar: "",
        createdAt: "",
        id: "2",
        message: "",
        title: ""
    },{
        avatar: "",
        createdAt: "",
        id: "3",
        message: "",
        title: ""
    },{
        avatar: "",
        createdAt: "",
        id: "4",
        message: "",
        title: ""
    },{
        avatar: "",
        createdAt: "",
        id: "5",
        message: "",
        title: ""
    }],
    postsLoading: true
}


const postsReducer = (state = initalState, action) => {
    switch (action.type) {
        case "INIT_POSTS":
            return {
                posts: action.posts,
                postsLoading: false
            }
        default:
            return state;
    }
}


export default postsReducer;