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
    Validation,
    Token
} from '../../assets/helper';
import {addAlert} from '../alerts/alertsSlice';
import {NUM} from '../../assets/constants';
import {userSetUser} from '../user/userSlice';

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
    'registerForm/registerFormSendEmailThunk',
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

            if (data.status !== 200) throw data;

            dispatch(
                addAlert({
                    type: 'success',
                    message:
                        'На вашу почту отправленно письмо с подтверждающим кодом'
                })
            );

            return fulfillWithValue(null);
        } catch (error) {
            return rejectWithValue({errors: error.errors});
        }
    }
);

export const registerFormSendCodeThunk = createAsyncThunk(
    'registerForm/registerFormSendCodeThunk',
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
                fieldsStringify({
                    ...fields.first,
                    ...fields.second
                })
            );

            if (data.status !== 200) throw data;

            return fulfillWithValue(null);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const registerFormSubmitThunk = createAsyncThunk(
    'registerForm/registerFormSubmitThunk',
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
                code: fields['second'].code.value,
                password: fields['third'].password.value
            };
            const data = await registrationSendUser(body);

            if (data.status !== 200) throw data;

            Token.set(data.data.accessToken);
            const {id, email, role, active} = Token.decode(
                data.data.accessToken
            );
            dispatch(
                userSetUser({
                    data: {id, email, role, active: !!active},
                    isAuthorized: true
                })
            );

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
    name: 'registerForm',
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
                    const validateObject = Validation.email(value);

                    field.value = validateObject.value;
                    field.isValid = validateObject.isValid;
                    break;
                }
                case 'code': {
                    const validateObject = Validation.code(value);

                    field.value = validateObject.value;
                    field.isValid = validateObject.isValid;
                    break;
                }
                case 'password': {
                    const validateObject = Validation.password(value);

                    field.value = validateObject.value;
                    field.isValid = validateObject.isValid;

                    state.fields[currentScreen].passwordRepeat.isValid =
                        value.length >= NUM.password.minLength &&
                        state.fields[currentScreen].passwordRepeat.value ===
                            value;
                    break;
                }
                case 'passwordRepeat': {
                    const validateObject = Validation.password(value);

                    field.value = validateObject.value;
                    field.isValid =
                        value.length > NUM.password.minLength &&
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
                state.error = action.payload.errors;
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
                state.isSuccess = false;
                state.currentScreen = 'first';
            })
            .addCase(registerFormSubmitThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload.message;
            });
    }
});

export const {
    registerFormInit,
    registerFormChangeField
} = registerFormSlice.actions;
export const registerFormReducer = registerFormSlice.reducer;
