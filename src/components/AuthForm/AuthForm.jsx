import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import css from "./AuthForm.module.sass";
import {Field} from "../../molecules/Field/Field";
import {Button} from "../../molecules/Button/Button";
import {
    authFormChangeField,
    authFormInit,
    authFormSubmit
} from "../../store/authForm/authFormSlice";
import {authFormSelector} from "../../store/authForm/authFormSelectors";
import {userInit} from "../../store/user/userSlice";

export const AuthForm = memo(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {fields, isSuccess, isLoading, isValid, isSubmit} =
        useSelector(authFormSelector);

    const authSubmitAction = () => {
        dispatch(authFormSubmit()).then((data) => {
            if (data.type === "authForm/authFormSubmit/fulfilled") {
                navigate("/");
                dispatch(userInit());
            }
        });
    };

    useEffect(() => {
        if (!isSuccess && !isLoading) dispatch(authFormInit());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(authFormChangeField({name, value}));
    };

    return (
        <form className={css.authForm + " form form--fixed-width"}>
            <h3 className="form__title">Авторизация</h3>
            <ul className={css.authForm__inner}>
                {Object.values(fields).map((field) => (
                    <li key={field.name} className={css.authForm__item}>
                        <Field
                            {...field}
                            change={changeFiledHandler(field.name)}
                            blur={() => () => {}}
                        />
                    </li>
                ))}
            </ul>
            <Button
                cssClass="form__button"
                text="Войти"
                clickHandler={authSubmitAction}
                disabled={!isValid}
                loading={isSubmit}
            />
            <NavLink className="link" to="/register">
                Регистрация
            </NavLink>
        </form>
    );
});
