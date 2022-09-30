import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {instance, requestWithToken} from '../../api/server';
import {Token} from '../../assets/helper';

const initialState = {
    data: null,
    isLoading: false,
    isSuccess: false,
    isAuthorized: false,
    isError: false,
    error: null
};

export const userInit = createAsyncThunk(
    'user/userInit',
    async (_, {rejectWithValue, fulfillWithValue}) => {
        try {
            const data = await requestWithToken('/check-token');
            let userPayload = {};
            console.log({data});

            if (!data.data?.accessToken) {
                const {id, email, rol, active} = Token.decode(Token.get());
                userPayload = {id, email, rol, active: !!active};
            } else {
                Token.set(data.data.accessToken);
                const {id, email, rol, active} = Token.decode(
                    data.data.accessToken
                );
                userPayload = {id, email, rol, active: !!active};
            }

            if (data.status === 200) {
                return fulfillWithValue({
                    data: userPayload,
                    isAuthorized: true
                });
            }
            if (data.status === 403) {
                return fulfillWithValue({data: null, isAuthorized: false});
            }

            throw data;
        } catch (error) {
            console.warn(error);
            return rejectWithValue({error: error.error});
        }
    }
);

export const userLogout = createAsyncThunk(
    'user/userLogout',
    async (_, {rejectWithValue, fulfillWithValue}) => {
        try {
            const data = await instance.get('/logout');
            Token.remove();
            return fulfillWithValue(data);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSetUser(state, action) {
            state.data = action.payload.data;
            state.isAuthorized = action.payload.isAuthorized;
            state.isSuccess = true;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userInit.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(userInit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload.data;
                state.isAuthorized = action.payload.isAuthorized;
            })
            .addCase(userInit.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.log('TODO ACTION', action); // need add error
            })
            .addCase(userLogout.pending, (state, action) => {
                state.isSubmit = false;
            })
            .addCase(userLogout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = null;
                state.isAuthorized = false;
            });
    }
});
export const {userSetUser} = userSlice.actions;

export const userReducer = userSlice.reducer;
