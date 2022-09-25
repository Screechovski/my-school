import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
    registrationSendCode,
    registrationSendEmail,
    registrationSendUser
} from '../../api/registration';
import {
    emailFieldCreator,
    createField,
    fieldsIsValid,
    fieldsStringify,
    isValidEmail
} from '../../assets/helper';
import {addAlert} from '../alerts/alertsSlice';

const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,

    fields: {},
    currentScreen: 'first',
    error: null
};

const getFields = () => ({
    first: {
        email: emailFieldCreator()
    },
    second: {
        code: createField({
            name: 'code',
            headline: 'Введите код из письма',
            placeholder: 'Введите код',
            value: 'a35y7u',
            isValid: true
        })
    },
    third: {
        password: createField({
            name: 'password',
            headline: 'Придумайте пароль',
            placeholder: 'Введите пароль',
            type: 'password'
        }),
        passwordRepeat: createField({
            name: 'passwordRepeat',
            headline: 'Повторите пароль',
            placeholder: 'Введите пароль повторно',
            type: 'password'
        })
    }
});

export const registerFormSendEmailThunk = createAsyncThunk(
    'registerFormSlice/registerFormSendEmailThunk',
    async (_, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
        const {
            registerFormReducer: {fields, currentScreen}
        } = getState();

        if (!fieldsIsValid(fields[currentScreen])) {
            dispatch(
                addAlert({
                    type: 'error',
                    message: 'Проверьте правильность заполненых полей'
                })
            );

            return rejectWithValue({
                message: 'Проверьте правильность заполненых полей'
            });
        }

        try {
            const data = await registrationSendEmail(
                fieldsStringify(fields[currentScreen])
            );

            if (data.status !== 'SUCCESS') throw data;

            dispatch(
                addAlert({
                    type: 'success',
                    message:
                        'На вашу почту отправленно письмо с подтверждающим кодом'
                })
            );

            return fulfillWithValue(null);
        } catch (error) {
            console.warn(error);
            return rejectWithValue(error);
        }
    }
);

export const registerFormSendCodeThunk = createAsyncThunk(
    'registerFormSlice/registerFormSendCodeThunk',
    async (_, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
        const {
            registerFormReducer: {fields, currentScreen}
        } = getState();

        if (!fieldsIsValid(fields[currentScreen])) {
            dispatch(
                addAlert({
                    type: 'error',
                    message: 'Проверьте правильность заполненых полей'
                })
            );

            return rejectWithValue({
                message: 'Проверьте правильность заполненых полей'
            });
        }

        try {
            const data = await registrationSendCode(
                fieldsStringify(fields[currentScreen])
            );

            if (data.status !== 'SUCCESS') throw data;

            return fulfillWithValue(null);
        } catch (error) {
            console.warn(error);

            return rejectWithValue(error);
        }
    }
);

export const registerFormSubmitThunk = createAsyncThunk(
    'registerFormSlice/registerFormSubmitThunk',
    async (_, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
        const {
            registerFormReducer: {fields}
        } = getState();

        if (
            !fieldsIsValid(fields['first']) &&
            !fieldsIsValid(fields['third'])
        ) {
            dispatch(
                addAlert({
                    type: 'error',
                    message: 'Проверьте правильность заполненых полей'
                })
            );

            return rejectWithValue({
                message: 'Проверьте правильность заполненых полей'
            });
        }

        try {
            const body = {
                email: fields['first'].email.value,
                password: fields['third'].password.value
            };
            const data = await registrationSendUser(body);

            if (data.status !== 'SUCCESS') throw data;

            dispatch(
                addAlert({
                    type: 'success',
                    message: 'Пользователь успешно создан'
                })
            );

            return fulfillWithValue(null);
        } catch (error) {
            console.warn(error);

            return rejectWithValue(error);
        }
    }
);

export const registerFormSlice = createSlice({
    name: 'registerFormSlice',
    initialState,
    reducers: {
        registerFormInit(state, action) {
            state.fields = getFields();
            state.isSuccess = true;
        },
        registerFormChangeField(state, action) {
            const {name, value} = action.payload;
            const {currentScreen} = state;
            const field = state.fields[currentScreen][name];

            switch (name) {
                case 'email': {
                    field.value = value;
                    field.isValid = isValidEmail(value);
                    break;
                }
                case 'code': {
                    const cleanValue = value.replace(/[^a-z0-9]/gi, '');
                    field.value = cleanValue;
                    field.isValid = cleanValue.length === 6;
                    break;
                }
                case 'password': {
                    field.value = value;
                    field.isValid = value.length >= 4;

                    state.fields[currentScreen].passwordRepeat.isValid =
                        value.length >= 4 &&
                        state.fields[currentScreen].passwordRepeat.value ===
                            value;
                    break;
                }
                case 'passwordRepeat': {
                    field.value = value;
                    field.isValid =
                        value.length >= 4 &&
                        state.fields[currentScreen].password.value === value;
                    break;
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerFormSendEmailThunk.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(registerFormSendEmailThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentScreen = 'second';
            })
            .addCase(registerFormSendEmailThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload.message;
            })
            .addCase(registerFormSendCodeThunk.pending, (state, action) => {
                state.error = null;
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(registerFormSendCodeThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentScreen = 'third';
            })
            .addCase(registerFormSendCodeThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload.message;
            })
            .addCase(registerFormSubmitThunk.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(registerFormSubmitThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.fields = getFields();
            })
            .addCase(registerFormSubmitThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload.message;
            });
    }
});

export const {registerFormInit, registerFormChangeField} =
    registerFormSlice.actions;
export const registerFormReducer = registerFormSlice.reducer;
