export const ADD_REVIEW = "ADD_REVIEW";
export const SET_CURRENT_REVIEW_NAME = "SET_CURRENT_REVIEW_NAME";
export const SET_CURRENT_REVIEW_TITLE = "SET_CURRENT_REVIEW_TITLE";
export const SET_CURRENT_REVIEW_MESSAGE = "SET_CURRENT_REVIEW_MESSAGE";

export const addReviewActionCreator = () => ({type: ADD_REVIEW});
export const setCurrentReviewMessageActionCreator = value => ({type:SET_CURRENT_REVIEW_MESSAGE, fieldValue: value});
export const setCurrentReviewNameActionCreator = value => ({type:SET_CURRENT_REVIEW_NAME, fieldValue: value});
export const setCurrentReviewTitleActionCreator = value => ({type:SET_CURRENT_REVIEW_TITLE, fieldValue: value});

const initialState  = {
    currentUser:  {
        userName: "asd",
            title: "",
            message: ""
    },
    reviews: [
        {
            id: 0,
            userName: "Larionov Orest",
            title: "Maecenas ullamcorper, lectus in elementum tincidunt, nibh tortor ornare diam",
            message: "Ut posuere dictum elit nec ornare. Curabitur id tristique velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat leo, laoreet et lorem non, viverra ultrices lorem. Sed viverra mollis felis et rutrum. Nam vel mi leo. Cras tempus sapien non purus maximus porta vel mattis ligula. Vivamus laoreet pharetra mi non gravida."
        },{
            id: 1,
            userName: "Zaitsev Arseny",
            title: "Aenean massa magna, aliquet id malesuada non, vulputate a leo.",
            message: "Nam vehicula sapien orci, sit amet molestie quam consequat nec. Vivamus quam nunc, pharetra eget leo sed, rutrum ultricies risus. Nunc at elit ex. Nunc sapien purus, pulvinar ac eros ut, faucibus malesuada tellus. Duis sit amet laoreet mi. Fusce gravida eros sit amet nisi maximus, non rhoncus lectus tristique."
        },{
            id: 2,
            userName: "Lobanov Venedict",
            title: "Curabitur vitae dolor id orci semper pharetra.",
            message: "Nullam a tortor at elit viverra maximus volutpat vel ligula. Vestibulum magna tortor, tristique at iaculis non, accumsan nec neque. Nulla nec porta sem. Duis tempus consectetur nisl consectetur malesuada. Cras sagittis ante sed aliquam cursus. Nunc dolor dolor, finibus ut pretium quis, rhoncus porttitor leo. Pellentesque ut mattis elit."
        },{
            id: 3,
            userName: "Panov Alexander",
            title: "Phasellus rutrum ornare faucibus.",
            message: "Donec laoreet, est non fermentum efficitur, turpis quam luctus nibh, eu euismod ante tellus vel augue. Nunc dignissim massa sed rutrum sodales. Nullam non mi lacus. Quisque semper, orci et volutpat commodo, felis nisl dictum enim, quis luctus enim odio ac erat. Curabitur id dui eget libero ornare egestas."
        }
    ]
};

const allReviewReducer = (state = initialState, action = {}) => {
    const { currentUser, reviews } = state;
    switch (action.type) {
        case ADD_REVIEW:
            if (currentUser.userName !== "") {
                if (currentUser.title !== "") {
                    if (currentUser.message !== "") {
                        reviews.push({
                            id: reviews.length,
                            ...currentUser
                        })
                        currentUser.userName = "";
                        currentUser.title = "";
                        currentUser.message = "";
                    }
                }
            }
            return state;
        case SET_CURRENT_REVIEW_NAME:
            const lastChar = action.fieldValue[action.fieldValue.length - 1];

            if (lastChar == " " || isNaN(Number(lastChar))){
                currentUser.userName = action.fieldValue;
            }
            return state;
        case SET_CURRENT_REVIEW_TITLE:
            currentUser.title = action.fieldValue;
            return state;
        case SET_CURRENT_REVIEW_MESSAGE:
            currentUser.message = action.fieldValue;
            return state;
        default:
            console.warn(`Has not this ${action.type} action.type`)
            return state;
    }
}

export default allReviewReducer;