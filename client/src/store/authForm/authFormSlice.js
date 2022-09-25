import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
    emailFieldCreator,
    createField,
    fieldsIsValid,
    fieldsStringify,
    isValidEmail
} from '../../assets/helper';
import {addAlert} from '../alerts/alertsSlice';
import {authorization} from '../../api/auth';

const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,

    fields: {},
    error: null
};

const getFields = () => ({
    email: emailFieldCreator(),
    password: createField({
        name: 'password',
        headline: 'Пароль',
        placeholder: 'Введите пароль',
        type: 'password'
    })
});

export const authFormSubmitThunk = createAsyncThunk(
    'authForm/authFormSubmitThunk',
    async (_, {dispatch, getState, fulfillWithValue, rejectWithValue}) => {
        const {
            authFormReducer: {fields}
        } = getState();

        if (!fieldsIsValid(fields)) {
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
            const data = await authorization(fieldsStringify(fields));

            if (data.status !== 'SUCCESS') throw data;

            dispatch(
                addAlert({
                    type: 'success',
                    message: 'Вы успешно авторизированны'
                })
            );

            return fulfillWithValue(null);
        } catch (error) {
            console.warn(error);
            return rejectWithValue(error);
        }
    }
);

export const authFormSlice = createSlice({
    name: 'authFormSlice',
    initialState,
    reducers: {
        authFormInit(state, action) {
            state.fields = getFields();
            state.isSuccess = true;
        },
        authFormChangeField(state, action) {
            const {name, value} = action.payload;

            switch (name) {
                case 'email': {
                    state.fields[name].value = value;
                    state.fields[name].isValid = isValidEmail(value);
                    break;
                }
                case 'password': {
                    state.fields[name].value = value;
                    state.fields[name].isValid = value.length > 5;
                    break;
                }
            }

            state.isValid = fieldsIsValid(state.fields);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authFormSubmitThunk.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.error = null;
        });
        builder.addCase(authFormSubmitThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.fields = getFields();
        });
        builder.addCase(authFormSubmitThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload.message;
        });
    }
});

export const {authFormInit, authFormChangeField} = authFormSlice.actions;

export const authFormReducer = authFormSlice.reducer;
