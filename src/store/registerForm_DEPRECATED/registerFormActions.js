import {
    registerFormChangeFieldAC,
    registerFormSubmitFailAC,
    registerFormSubmitStartAC,
    registerFormSubmitSuccessAC
} from "./registerFormActionCreator";
import {fieldsIsValid, fieldsStringify, myFetch} from "../../assets/helper";

export const registerFormChangeFieldAction =
    (dispatch) => (name) => (value) => {
        dispatch(registerFormChangeFieldAC({name, value: value.target.value}));
    };

export const registerFormSubmit = async (dispatch, getState) => {
    const {
        registerFormReducer: {fields}
    } = getState();

    if (fieldsIsValid(fields)) {
        dispatch(registerFormSubmitStartAC());

        try {
            const data = await myFetch("/create-user", {
                body: fieldsStringify(fields)
            });
            console.log(data);
            dispatch(registerFormSubmitSuccessAC());
            history("/auth");
        } catch (error) {
            console.warn(error);
            dispatch(registerFormSubmitFailAC());
        }
    }
};
