import React, {useEffect} from "react";
import {authFormHook} from "../../store/authForm/authFormHook";
import {useDispatch} from "react-redux";
import {authFormInitAC} from "../../store/authForm/authFormActionCreator";
import {authFormChangeFieldAction} from "../../store/authForm/authFormActions";
import {NavLink} from "react-router-dom";
import css from "./AuthForm.module.sass";
import {Field} from "../../molecules/Field/Field";
import {Button} from "../../molecules/Button/Button";

export const AuthForm = () => {
    const dispatch = useDispatch();
    const {fields, isSuccess, isLoading, isValid, isSubmit} = authFormHook();

    useEffect(() => {
        if (!isSuccess && !isLoading) dispatch(authFormInitAC());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(authFormChangeFieldAction)(name)(value);
    };

    return (
        <form className={css.authForm + " form form--fixed-width"}>
            <h3 className="form__title">Авторизация</h3>
            <ul className={css.authForm__inner}>
                {fields.map((field) => (
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
                clickHandler={() => () => {}}
                disabled={!isValid}
                loading={isSubmit}
            />
            <NavLink className="link" to="/register">
                Регистрация
            </NavLink>
        </form>
    );
};
