import React, {memo, useEffect} from "react";
import {NavLink} from "react-router-dom";
import css from "./UserPanel.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {userInit} from "../../store/user/userSlice";

export const UserPanel = memo(() => {
    const dispatch = useDispatch();
    const {isSubmit, data} = useSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(userInit());
    }, []);

    if (!isSubmit && !data) {
        return (
            <NavLink className="link" to="/auth">
                Войти
            </NavLink>
        );
    }

    if (!isSubmit && data) {
        return (
            <NavLink className="link" to="/profile">
                Профиль
            </NavLink>
        );
    }

    return <></>;
});
