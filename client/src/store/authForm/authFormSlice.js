import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    emailFieldCreator,
    fieldCreator,
    fieldsIsValid,
    fieldsStringify,
    isValidEmail,
    myFetch
} from "../../assets/helper";
import {addAlert} from "../alerts/alertsSlice";

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
        headline: "Пароль",
        placeholder: "Введите пароль",
        type: "password"
    })
});

export const authFormSubmit = createAsyncThunk(
    "authForm/authFormSubmit",
    async (_, {dispatch, getState, fulfillWithValue, rejectWithValue}) => {
        const {
            authFormReducer: {fields}
        } = getState();

        if (!fieldsIsValid(fields)) {
            dispatch(
                addAlert({
                    type: "error",
                    message: "Проверьте правильность заполненых полей"
                })
            );

            return rejectWithValue({
                error: {error: "Проверьте правильность заполненых полей"}
            });
        }

        try {
            const data = await myFetch("/auth", {
                body: fieldsStringify(fields)
            });

            if (data.status !== "SUCCESS") throw data;

            dispatch(
                addAlert({
                    type: "success",
                    message: "Вы успешно авторизированны"
                })
            );

            return fulfillWithValue({data});
        } catch (error) {
            console.warn(error);

            dispatch(addAlert({type: "error", message: error.error}));

            return rejectWithValue({error});
        }
    }
);

export const authFormSlice = createSlice({
    name: "authForm",
    initialState,
    reducers: {
        authFormInit(state, action) {
            state.fields = getFields();
            state.isInited = true;
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
    },
    extraReducers: {
        [authFormSubmit.pending]: (state, action) => {
            state.isSubmit = true;
        },
        [authFormSubmit.fulfilled]: (state, action) => {
            state.isSubmit = false;
            state.fields = getFields();
            state.isValid = false;
        },
        [authFormSubmit.rejected]: (state, action) => {
            state.isSubmit = false;
            state.isError = true;
        }
    }
});

export const {authFormInit, authFormChangeField} = authFormSlice.actions;

export const authFormReducer = authFormSlice.reducer;
