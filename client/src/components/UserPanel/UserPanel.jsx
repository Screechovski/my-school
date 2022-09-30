import React, {memo, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../../molecules/CoolLoader/Loader';
import {userInit} from '../../store/user/userSlice';
import css from './UserPanel.module.sass';

export const UserPanel = memo(() => {
    const dispatch = useDispatch();
    const {isLoading, data, isSuccess, isAuthorized} = useSelector(
        (state) => state.userReducer
    );

    useEffect(() => {
        dispatch(userInit());
    }, []);

    if (isLoading) {
        return <Loader cssClass={css.userPanelLoader} />;
    }

    if (isSuccess && !isAuthorized) {
        return (
            <NavLink className="link" to="/auth">
                Войти
            </NavLink>
        );
    }

    if (isSuccess && isAuthorized) {
        return (
            <NavLink className="link" to="/profile">
                Профиль
            </NavLink>
        );
    }

    return <span></span>;
});
