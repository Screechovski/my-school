import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {check} from '../../api/check';
import {instance} from '../../api/server';
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
            const data = await check();

            if (data.status === 200) {
                const {id, email, role, active} = Token.decode(Token.get());
                return fulfillWithValue({
                    data: {id, email, role, active: !!active},
                    isAuthorized: true
                });
            }
            if (data.status !== 401) {
                throw data;
            }
            const refreshResponce = await instance.get('/refresh');
            if (refreshResponce.status === 403) {
                return fulfillWithValue({data: null, isAuthorized: false});
            }
            if (refreshResponce.status === 200) {
                Token.set(refreshResponce.data.accessToken);
                const {id, email, role, active} = Token.decode(
                    refreshResponce.data.accessToken
                );
                refreshResponce.data.accessToken;
                return fulfillWithValue({
                    data: {id, email, role, active: !!active},
                    isAuthorized: true
                });
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
