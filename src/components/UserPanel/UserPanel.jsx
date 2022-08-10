import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import css from "./UserPanel.module.sass";

export const UserPanel = memo(() => {
    return (
        <NavLink className="link" to="/auth">
            Войти
        </NavLink>
    );
});
