import {registerFormChangeFieldAC} from "./registerFormActionCreator";

export const registerFormChangeFieldAction =
    (dispatch) => (name) => (value) => {
        dispatch(registerFormChangeFieldAC({name, value: value.target.value}));
    };
