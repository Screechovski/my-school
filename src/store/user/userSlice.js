import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {myFetch} from "../../assets/helper";

const initialState = {
    data: null,
    isError: false,
    isSubmit: false,
    isSuccess: false,
    error: null
};

export const userInit = createAsyncThunk(
    "user/userInit",
    async (_, {rejectWithValue, fulfillWithValue}) => {
        try {
            const data = await myFetch("/check");

            if (data.status !== "SUCCESS") throw data;

            return fulfillWithValue({data: data.data});
        } catch (error) {
            console.warn(error);
            return rejectWithValue({error: error.error});
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [userInit.pending]: (state, action) => {
            state.isSubmit = true;
            state.isError = false;
        },
        [userInit.fulfilled]: (state, action) => {
            state.isSubmit = false;
            state.data = action.payload.data;
        },
        [userInit.rejected]: (state, action) => {
            state.isSubmit = false;
        }
    }
});

export const userReducer = userSlice.reducer;
