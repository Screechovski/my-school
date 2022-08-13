import React, {useEffect} from "react";
import {Field} from "../../molecules/Field/Field";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordFormSelector} from "../../store/resetPasswordForm/resetPasswordFormSelector";
import {
    resetPasswordFormChangeField,
    resetPasswordFormInit,
    resetPasswordSubmit
} from "../../store/resetPasswordForm/resetPasswordFormSlice";
import css from "./ResetPasswordForm.module.sass";
import {Button} from "../../molecules/Button/Button";
import {NavLink} from "react-router-dom";

export const ResetPasswordForm = ({}) => {
    const {isInited, fields, isValid, isSubmit} = useSelector(
        resetPasswordFormSelector
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isInited) dispatch(resetPasswordFormInit());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(resetPasswordFormChangeField({name, value}));
    };
    const resetPasswordSubmitAction = () => {
        dispatch(resetPasswordSubmit());
    };

    if (!isInited) {
        return <></>;
    }

    return (
        <form className={css.resetPasswordForm + " form form--fixed-width"}>
            <h3 className="form__title">Восстановление пароля</h3>
            <ul className={css.resetPasswordForm__inner}>
                {Object.values(fields).map((field) => (
                    <li
                        key={field.name}
                        className={
                            css.resetPasswordForm__item +
                            " " +
                            css[`resetPasswordForm__${field.name}`]
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
                text="Восстановить"
                clickHandler={resetPasswordSubmitAction}
                disabled={!isValid}
                loading={isSubmit}
            />
            <NavLink className="link" to="/auth">
                Авторизация
            </NavLink>
        </form>
    );
};
