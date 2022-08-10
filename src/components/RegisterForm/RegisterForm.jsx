import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {registerFormInitAC} from "../../store/registerForm/registerFormActionCreator";
import {registerFormHook} from "../../store/registerForm/registerFormHook";
import css from "./RegisterForm.module.sass";
import {Field} from "../../molecules/Field/Field";
import {Button} from "../../molecules/Button/Button";
import {
    registerFormChangeFieldAction,
    registerFormSubmit
} from "../../store/registerForm/registerFormActions";

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const {fields, isSuccess, isLoading, isValid, isSubmit} =
        registerFormHook();
    const registerFormSubmitAction = () => dispatch(registerFormSubmit);

    useEffect(() => {
        if (!isSuccess && !isLoading) dispatch(registerFormInitAC());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(registerFormChangeFieldAction)(name)(value);
    };

    return (
        <form className={css.registerForm + " form"}>
            <h3 className="form__title">Регистрация</h3>
            <ul className={css.registerForm__inner}>
                {fields.map((field) => (
                    <li
                        key={field.name}
                        className={
                            css.registerForm__item +
                            " " +
                            css[`registerForm__${field.name}`]
                        }
                    >
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
                text="Отправить"
                clickHandler={registerFormSubmitAction}
                disabled={!isValid}
                loading={isSubmit}
            />
            <NavLink className="link" to="/auth">
                Авторизация
            </NavLink>
        </form>
    );
};
