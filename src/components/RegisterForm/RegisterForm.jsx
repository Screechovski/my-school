import React, {useEffect, memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import css from "./RegisterForm.module.sass";
import {Field} from "../../molecules/Field/Field";
import {Button} from "../../molecules/Button/Button";
import {
    registerFormChangeField,
    registerFormInit,
    registerFormSubmit
} from "../../store/registerForm/registerFormSlice";

export const RegisterForm = memo(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {fields, isSuccess, isLoading, isValid, isSubmit} = useSelector(
        (state) => state.registerFormReducer
    );
    const registerFormSubmitAction = () => {
        dispatch(registerFormSubmit()).then((data) => {
            if (data.type === "registerForm/registerFormSubmit/fulfilled") {
                navigate("/auth");
            }
        });
    };

    useEffect(() => {
        if (!isSuccess && !isLoading) dispatch(registerFormInit());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(registerFormChangeField({name, value}));
    };

    return (
        <form className={css.registerForm + " form"}>
            <h3 className="form__title">Регистрация</h3>
            <ul className={css.registerForm__inner}>
                {Object.values(fields).map((field) => (
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
});
