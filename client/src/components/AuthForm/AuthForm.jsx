import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import css from './AuthForm.module.sass';
import {Field} from '../../molecules/Field/Field';
import {Button} from '../../molecules/Button/Button';
import {
    authFormChangeField,
    authFormInit,
    authFormSubmitThunk
} from '../../store/authForm/authFormSlice';
import {authFormSelector} from '../../store/authForm/authFormSelectors';
import {fieldsIsValid} from '../../assets/helper';
import {Loader} from '../../molecules/CoolLoader/Loader';

export const AuthForm = memo(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {fields, isError, isSuccess, isLoading, error} =
        useSelector(authFormSelector);

    const authSubmitAction = () => {
        dispatch(authFormSubmitThunk()).then((data) => {
            if (data.type === 'authForm/authFormSubmitThunk/fulfilled')
                navigate('/');
        });
    };

    useEffect(() => {
        if (!isSuccess) dispatch(authFormInit());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(authFormChangeField({name, value}));
    };

    return (
        <form className={css.authForm + ' form form--fixed-width'}>
            <h3 className="form__title">Авторизация</h3>
            {isSuccess ? (
                <>
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
                    {isError && (
                        <p className="bg-red-200 border-2 border-red-600 px-3 py-2 rounded-small">
                            {error}
                        </p>
                    )}
                    <Button
                        cssClass="form__button"
                        text="Войти"
                        clickHandler={authSubmitAction}
                        disabled={!fieldsIsValid(fields)}
                        loading={isLoading}
                    />
                    <div className="flex justify-between">
                        <NavLink className="link" to="/register">
                            Регистрация
                        </NavLink>
                        <NavLink className="link" to="/reset-password">
                            Восстановить пароль
                        </NavLink>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center p-4 bg-blue-700 rounded-medium w-fit mx-auto">
                    <Loader />
                </div>
            )}
        </form>
    );
});
