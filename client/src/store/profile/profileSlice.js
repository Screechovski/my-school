import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentTab: 'personal',
    tabs: {
        personal: {
            name: 'personal',
            label: 'Персональные данные',
            roles: ['admin']
        },
        users: {
            name: 'users',
            label: 'Пользователи',
            roles: ['admin']
        },
        subjects: {
            name: 'subjects',
            label: 'Предметы',
            roles: ['admin']
        },
        educators: {
            name: 'educators',
            label: 'Преподаватели',
            roles: ['admin']
        },
        news: {
            name: 'news',
            label: 'Новости',
            roles: ['admin']
        },
        events: {
            name: 'events',
            label: 'Мероприятия',
            roles: ['admin']
        }
    }
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeTab(state, action) {
            if (state.currentTab !== action.payload.tab) {
                state.currentTab = action.payload.tab;
            }
        }
    }
});

export const {changeTab} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
