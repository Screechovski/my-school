import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fieldsIsValid, isValidEmail} from "../../assets/helper";

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

export const authFormSubmit = createAsyncThunk("authForm/authFormSubmit", async (_, {}) => {

})

export const authFormSlice = createSlice({
    name: "authForm",
    initialState,
    reducers: {
        authFormInit(state, action) {
            state.fields = getFields();
            state.isSuccess = true;
        },
        authFormChangeField(state, action) {
            const {name, value} = action.payload;

            switch (name) {
                case "email": {
                    state.fields[name].value = value;
                    state.fields[name].isValid = isValidEmail(value);
                    break;
                }
                case "password": {
                    state.fields[name].value = value;
                    state.fields[name].isValid = value.length > 4;
                    break;
                }
            }

            state.isValid = fieldsIsValid(state.fields);
        }
    }
});

export const {authFormInit, authFormChangeField} = authFormSlice.actions;

export const authFormReducer = authFormSlice.reducer;
