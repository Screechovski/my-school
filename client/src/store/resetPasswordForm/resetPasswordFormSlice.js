import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
    resetPasswordSendCode,
    resetPasswordSendEmail,
    resetPasswordSendPassword
} from '../../api/resetPassword';
import {
    emailFieldCreator,
    createField,
    fieldsIsValid,
    Validation,
    fieldsStringify
} from '../../assets/helper';
import {addAlert} from '../alerts/alertsSlice';
import {NUM} from "../../assets/constants";

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
            headline: 'Новый пароль',
            placeholder: 'Введите пароль',
            type: 'password'
        }),
        passwordRepeat: createField({
            name: 'passwordRepeat',
            headline: 'Повторите новый пароль',
            placeholder: 'Введите пароль повторно',
            type: 'password'
        })
    }
});

export const resetPasswordSendEmailThunk = createAsyncThunk(
    'resetPasswordFormSlice/resetPasswordSendEmailThunk',
    async (_, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
        const {
            resetPasswordFormReducer: {fields, currentScreen}
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
            const data = await resetPasswordSendEmail(
                fieldsStringify(fields[currentScreen])
            );

            if (data.status !== 'SUCCESS') throw data;

            dispatch(
                addAlert({
                    type: 'success',
                    message: 'На вашу почту отправленн код для смены пароля'
                })
            );

            return fulfillWithValue(null);
        } catch (error) {
            console.warn(error);
            return rejectWithValue(error);
        }
    }
);

export const resetPasswordSendCodeThunk = createAsyncThunk(
    'resetPasswordFormSlice/resetPasswordSendCodeThunk',
    async (_, {getState, dispatch, rejectWithValue, fulfillWithValue}) => {
        const {
            resetPasswordFormReducer: {fields, currentScreen}
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
            const data = await resetPasswordSendCode(
                fieldsStringify(fields['second'])
            );

            if (data.status !== 'SUCCESS') throw data;

            return fulfillWithValue(null);
        } catch (error) {
            console.warn(error);
            return rejectWithValue(error);
        }
    }
);

export const resetPasswordSubmitThunk = createAsyncThunk(
    'resetPasswordFormSlice/resetPasswordSubmitThunk',
    async (_, {getState, dispatch, rejectWithValue, fulfillWithValue}) => {
        const {
            resetPasswordFormReducer: {fields}
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
            const data = await resetPasswordSendPassword(body);

            if (data.status !== 'SUCCESS') throw data;

            dispatch(
                addAlert({
                    type: 'success',
                    message: 'Пароль успешно изменён'
                })
            );
            return fulfillWithValue(null);
        } catch (error) {
            console.warn(error);
            return rejectWithValue(error);
        }
    }
);

const resetPasswordFormSlice = createSlice({
    name: 'resetPasswordFormSlice',
    initialState,
    reducers: {
        resetPasswordFormInit(state, action) {
            state.fields = getFields();
            state.isSuccess = true;
        },
        resetPasswordFormChangeField(state, action) {
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
                    field.value = value;
                    field.isValid = value.length > NUM.password.minLength;
                    state.fields[currentScreen].isValid =
                        value.length > NUM.password.minLength &&
                        state.fields[currentScreen].passwordRepeat.value ===
                            value;
                    break;
                }
                case 'passwordRepeat': {
                    field.value = value;
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
            .addCase(resetPasswordSendEmailThunk.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(resetPasswordSendEmailThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentScreen = 'second';
                state.isError = false;
                state.error = null;
            })
            .addCase(resetPasswordSendEmailThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload.message;
            })
            .addCase(resetPasswordSendCodeThunk.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(resetPasswordSendCodeThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentScreen = 'third';
                state.isError = false;
                state.error = null;
            })
            .addCase(resetPasswordSendCodeThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload.message;
            })
            .addCase(resetPasswordSubmitThunk.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(resetPasswordSubmitThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.fields = getFields();
            })
            .addCase(resetPasswordSubmitThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload.message;
            });
    }
});

export const {resetPasswordFormInit, resetPasswordFormChangeField} =
    resetPasswordFormSlice.actions;
export const resetPasswordFormReducer = resetPasswordFormSlice.reducer;
