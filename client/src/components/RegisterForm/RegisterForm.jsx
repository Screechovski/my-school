import React, {useEffect, memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import css from './RegisterForm.module.sass';
import {Field} from '../../molecules/Field/Field';
import {Button} from '../../molecules/Button/Button';
import {
    registerFormChangeField,
    registerFormInit,
    registerFormSubmitThunk,
    registerFormSendEmailThunk,
    registerFormSendCodeThunk
} from '../../store/registerForm/registerFormSlice';
import {fieldsIsValid} from '../../assets/helper';
import {Loader} from '../../molecules/CoolLoader/Loader';

export const RegisterForm = memo(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {fields, currentScreen, isSuccess, isError, isLoading, error} =
        useSelector((state) => state.registerFormReducer);

    useEffect(() => {
        if (!isSuccess) dispatch(registerFormInit());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(registerFormChangeField({name, value}));
    };

    const registerFormSubmitAction = () => {
        switch (currentScreen) {
            case 'first':
                dispatch(registerFormSendEmailThunk());
                break;
            case 'second':
                dispatch(registerFormSendCodeThunk());
                break;
            case 'third':
                dispatch(registerFormSubmitThunk()).then((data) => {
                    if (data.type === 'registerForm/registerFormSubmitThunk/fulfilled') {
                        navigate('/profile');
                    }
                });
                break;
            default:
                break;
        }
    };



    return (
        <form className={css.registerForm + ' form'}>
            <h3 className="form__title">Регистрация</h3>
            {isSuccess ? (
                <>
                    <ul className={css.registerForm__inner}>
                        {Object.values(fields[currentScreen]).map((field) => (
                            <li
                                key={field.name}
                                className={
                                    css.registerForm__item +
                                    ' ' +
                                    css[`registerForm__${field.name}`]
                                }
                            >
                                <Field
                                    {...field}
                                    change={changeFiledHandler(field.name)}
                                />
                            </li>
                        ))}
                    </ul>
                    {isError && (
                        <p className="bg-red-200 border-2 border-red-600 px-3 py-2 rounded-small">
                            {Array.isArray(error) ? error.map((error,i) => <span key={i}>{error.msg}<br/></span>) : <span>{error}</span>}
                        </p>
                    )}
                    <Button
                        cssClass="form__button"
                        text="Отправить"
                        clickHandler={registerFormSubmitAction}
                        disabled={!fieldsIsValid(fields[currentScreen])}
                        loading={isLoading}
                    />
                    <NavLink className="link" to="/auth">
                        Авторизация
                    </NavLink>
                </>
            ) : (
                <div className="flex items-center justify-center p-4 bg-blue-700 rounded-medium w-fit mx-auto">
                    <Loader />
                </div>
            )}
        </form>
    );
});
