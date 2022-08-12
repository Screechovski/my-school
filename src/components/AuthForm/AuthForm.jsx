import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import css from "./AuthForm.module.sass";
import {Field} from "../../molecules/Field/Field";
import {Button} from "../../molecules/Button/Button";
import {authFormChangeField, authFormInit} from "../../store/authForm/authFormSlice";
import {authFormSelector} from "../../store/authForm/authFormSelectors";

export const AuthForm = () => {
    const dispatch = useDispatch();
    const {fields, isSuccess, isLoading, isValid, isSubmit} = useSelector(authFormSelector);

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
                            blur={() => () => {
                            }}
                        />
                    </li>
                ))}
            </ul>
            <Button
                cssClass="form__button"
                text="Войти"
                clickHandler={() => () => {
                }}
                disabled={!isValid}
                loading={isSubmit}
            />
            <NavLink className="link" to="/register">
                Регистрация
            </NavLink>
        </form>
    );
};
