import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {fieldsIsValid, fieldsStringify, isValidEmail, myFetch} from "../../assets/helper";
import {addAlert} from "../alerts/alertsSlice";

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


export const registerFormSubmit = createAsyncThunk("registerForm/registerFormSubmit", async (_, {
    dispatch,
    getState,
    rejectWithValue,
    fulfillWithValue,
}) => {
    const {
        registerFormReducer: {fields}
    } = getState();

    try {
        const data = await myFetch("/create-user", {
            body: fieldsStringify(fields)
        });

        if (data.status !== "SUCCESS") throw data;

        dispatch(addAlert({type: "success", message: "Пользователь успешно создан"}));

        // и как тут вызвать редирект на /auth

        return fulfillWithValue({data});
    } catch (error) {
        console.warn(error);

        dispatch(addAlert({type: "error", message: error.error}));

        return rejectWithValue({error});
    }
});


export const registerFormSlice = createSlice({
    name: "registerForm",
    initialState,
    reducers: {
        registerFormInit(state, action) {
            state.fields = getFields();
            state.isSuccess = true;
        },
        registerFormChangeField(state, action) {
            const {name, value} = action.payload;

            switch (name) {
                case "name":
                case "childName": {
                    const tmpValue = value.replace(/[^а-я]/gi, "");
                    state.fields[name].value = tmpValue;
                    state.fields[name].isValid = tmpValue.length >= 2;
                    break;
                }
                case "surname":
                case "childSurname": {
                    const tmpValue = value.replace(/[^а-я]/gi, "");
                    state.fields[name].value = tmpValue;
                    state.fields[name].isValid = tmpValue.length >= 4;
                    break;
                }
                case "email": {
                    state.fields[name].value = value;
                    state.fields[name].isValid = isValidEmail(value);
                    break;
                }
                case "password": {
                    state.fields[name].value = value;
                    state.fields[name].isValid = value.length >= 4;
                    state.fields.passwordRepeat.isValid = value.length >= 4 && state.fields.passwordRepeat.value === value;
                    break;
                }
                case "passwordRepeat": {
                    state.fields[name].value = value;
                    state.fields[name].isValid = value.length >= 4 && state.fields.password.value === value;
                    break;
                }
            }

            state.isValid = fieldsIsValid(state.fields);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerFormSubmit.pending, (state, action) => {
                state.isSubmit = true;
                state.isError = false;
            })
            .addCase(registerFormSubmit.fulfilled, (state, action) => {
                state.fields = getFields();
                state.isSubmit = false;
                state.isValid = false;
            })
            .addCase(registerFormSubmit.rejected, (state, action) => {
                state.isError = true;
                state.isSubmit = false;
                state.error = action.payload.error.error;
            });
    }
});

export const {
    registerFormInit,
    registerFormChangeField,
} = registerFormSlice.actions;
export const registerFormReducer = registerFormSlice.reducer;
