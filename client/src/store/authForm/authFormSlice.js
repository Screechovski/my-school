import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
    emailFieldCreator,
    createField,
    fieldsIsValid,
    fieldsStringify,
    Validation,
    decodeToken,
    Token
} from '../../assets/helper';
import {addAlert} from '../alerts/alertsSlice';
import {authorization} from '../../api/auth';
import {userSetUser} from '../user/userSlice';

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
                    const validateObject = Validation.email(value);
                    state.fields[name].value = validateObject.value;
                    state.fields[name].isValid = validateObject.isValid;
                    break;
                }
                case 'password': {
                    const validateObject = Validation.password(value);
                    state.fields[name].value = validateObject.value;
                    state.fields[name].isValid = validateObject.isValid;
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
