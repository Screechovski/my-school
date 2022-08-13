import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    emailFieldCreator,
    fieldCreator,
    fieldsIsValid,
    isValidEmail
} from "../../assets/helper";

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    isValid: false,
    isSubmit: false,
    isInited: false,

    fields: {},
    error: null
};

const getFields = () => ({
    email: emailFieldCreator(),
    password: fieldCreator({
        name: "password",
        headline: "Новый пароль",
        placeholder: "Введите пароль",
        type: "password"
    }),
    passwordRepeat: fieldCreator({
        name: "passwordRepeat",
        headline: "Повторите новый пароль",
        placeholder: "Введите пароль повторно",
        type: "password"
    })
});

export const resetPasswordSubmit = createAsyncThunk(
    "resetPassword/resetPasswordSubmit",
    async (_, {getState}) => {
        const {
            resetPasswordReducer: {fields}
        } = getState();

        console.log(fields);
    }
);

const resetPasswordFormSlice = createSlice({
    name: "resetPassword",
    initialState,
    reducers: {
        resetPasswordFormInit(state, action) {
            state.fields = getFields();
            state.isInited = true;
        },
        resetPasswordFormChangeField(state, action) {
            const {name, value} = action.payload;

            switch (name) {
                case "email": {
                    state.fields[name].value = value;
                    state.fields[name].isValid = isValidEmail(value);
                    break;
                }
                case "password": {
                    state.fields[name].value = value;
                    state.fields[name].isValid = value.length >= 4;
                    state.fields.passwordRepeat.isValid =
                        value.length >= 4 &&
                        state.fields.passwordRepeat.value === value;
                    break;
                }
                case "passwordRepeat": {
                    state.fields[name].value = value;
                    state.fields[name].isValid =
                        value.length >= 4 &&
                        state.fields.password.value === value;
                    break;
                }
            }

            state.isValid = fieldsIsValid(state.fields);
        }
    }
});

export const {resetPasswordFormInit, resetPasswordFormChangeField} =
    resetPasswordFormSlice.actions;
export const resetPasswordFormReducer = resetPasswordFormSlice.reducer;
