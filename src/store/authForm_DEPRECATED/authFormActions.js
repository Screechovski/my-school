import {authFormChangeFieldAC} from "./authFormActionCreator";

export const authFormChangeFieldAction = (dispatch) => (name) => (value) => {
    dispatch(authFormChangeFieldAC({name, value: value.target.value}));
};
