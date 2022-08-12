import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    alerts: []
}

export const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        addAlert(state, action){
            const {type, message} = action.payload;

            state.alerts.push({
                id: Math.random() + "_" + Date.now(),
                type,
                message
            })
        },
        removeAlert(state, action) {
            const {id} = action.payload;

            state.alerts = state.alerts.filter((alert) => alert.id !== id);
        }
    },
})

export const { addAlert, removeAlert } = alertsSlice.actions

export const alertsReducer = alertsSlice.reducer;