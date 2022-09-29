import {AUTH_FORM_AT} from "./authFormActionTypes";
import {copyObject, fieldsIsValid, Validation} from "../../assets/helper";

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    isValid: false,
    isSubmit: false,

    fields: {},
    error: null
};

const getFields = () => ({
    email: {
        name: "email",
        headline: "Ваш email",
        placeholder: "Введите ваш email",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "input"
    },
    password: {
        name: "password",
        headline: "Пароль",
        placeholder: "Введите пароль",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "password"
    }
});

export const authFormReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case AUTH_FORM_AT.INIT: {
            return {
                ...state,
                fields: getFields(),
                isSuccess: true
            };
        }
        case AUTH_FORM_AT.CHANGE_FIELD: {
            const {name, value} = payload;
            let fields = copyObject(state.fields);

            switch (name) {
                case "email": {
                    const validateObject = Validation.email(value);

                    fields[name] = {
                        ...fields[name],
                        value: validateObject.value,
                        isValid: validateObject.isValid
                    };
                    break;
                }
                case "password": {
                    fields[name] = {
                        ...fields[name],
                        value,
                        isValid: value.length >= 4
                    };
                    break;
                }
            }

            return {
                ...state,
                fields,
                isValid: fieldsIsValid(fields)
            };
        }
        default: {
            return state;
        }
    }
};
