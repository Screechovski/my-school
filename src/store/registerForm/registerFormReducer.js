import {copyObject, fieldsIsValid, isValidEmail} from "../../assets/helper";
import {REGISTER_FORM_AT} from "./registerFormActionTypes";

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
    name: {
        name: "name",
        headline: "Ваше имя",
        placeholder: "Введите имя",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "input"
    },
    surname: {
        name: "surname",
        headline: "Ваше фамилия",
        placeholder: "Введите фамилию",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "input"
    },
    childName: {
        name: "childName",
        headline: "Имя ребёнка",
        placeholder: "Введите имя ребёнка",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "input"
    },
    childSurname: {
        name: "childSurname",
        headline: "Фамилия ребёнка",
        placeholder: "Введите фамилию ребёнка",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "input"
    },
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
    },
    passwordRepeat: {
        name: "passwordRepeat",
        headline: "Повторите пароль",
        placeholder: "Введите пароль повторно",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "password"
    }
});

export const registerFormReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case REGISTER_FORM_AT.INIT: {
            return {
                ...state,
                fields: getFields(),
                isSuccess: true
            };
        }
        case REGISTER_FORM_AT.CHANGE_FIELD: {
            let {name, value} = payload;
            let fields = copyObject(state.fields);

            switch (name) {
                case "name":
                case "childName": {
                    value = value.replace(/[^а-я]/gi, "");

                    fields[name] = {
                        ...fields[name],
                        value,
                        isValid: value.length >= 2
                    };
                    break;
                }
                case "surname":
                case "childSurname": {
                    value = value.replace(/[^а-я]/gi, "");

                    fields[name] = {
                        ...fields[name],
                        value,
                        isValid: value.length >= 4
                    };
                    break;
                }
                case "email": {
                    fields[name] = {
                        ...fields[name],
                        value,
                        isValid: isValidEmail(value)
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
                case "passwordRepeat": {
                    fields[name] = {
                        ...fields[name],
                        value,
                        isValid:
                            value.length >= 4 && fields.password.value === value
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
