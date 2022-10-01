import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {check} from '../../api/check';
import {instance} from '../../api/server';
import {Token} from '../../assets/helper';
import {changeTab} from '../profile/profileSlice';

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
            await check();

            return fulfillWithValue(Token.decode(Token.get()));
        } catch (error) {
            return rejectWithValue(error.data);
        }
    }
);

export const userLogout = createAsyncThunk(
    'user/userLogout',
    async (_, {rejectWithValue, fulfillWithValue, dispatch}) => {
        try {
            const data = await instance.get('/logout');
            Token.remove();
            dispatch(changeTab({tab: 'personal'}));
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
            .addCase(userInit.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userInit.fulfilled, (state, action) => {
                const {id, email, active, role} = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
                state.isAuthorized = true;
                state.data = {id, email, active, role};
            })
            .addCase(userInit.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isAuthorized = false;
            })
            .addCase(userLogout.pending, (state) => {
                state.isSubmit = false;
            })
            .addCase(userLogout.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = null;
                state.isAuthorized = false;
            });
    }
});
export const {userSetUser} = userSlice.actions;

export const userReducer = userSlice.reducer;
