import React, {useEffect} from 'react';
import {Field} from '../../molecules/Field/Field';
import {useDispatch, useSelector} from 'react-redux';
import {resetPasswordFormSelector} from '../../store/resetPasswordForm/resetPasswordFormSelector';
import {
    resetPasswordFormChangeField,
    resetPasswordFormInit,
    resetPasswordSendCodeThunk,
    resetPasswordSendEmailThunk,
    resetPasswordSubmitThunk
} from '../../store/resetPasswordForm/resetPasswordFormSlice';
import css from './ResetPasswordForm.module.sass';
import {Button} from '../../molecules/Button/Button';
import {NavLink, useNavigate} from 'react-router-dom';
import {Loader} from '../../molecules/CoolLoader/Loader';
import {fieldsIsValid} from '../../assets/helper';

export const ResetPasswordForm = ({}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {fields, isError, isSuccess, isLoading, error, currentScreen} =
        useSelector(resetPasswordFormSelector);

    useEffect(() => {
        if (!isSuccess) dispatch(resetPasswordFormInit());
    }, []);

    const changeFiledHandler = (name) => (value) => {
        dispatch(resetPasswordFormChangeField({name, value}));
    };

    const resetPasswordSubmitAction = () => {
        switch (currentScreen) {
            case 'first':
                dispatch(resetPasswordSendEmailThunk());
                break;
            case 'second':
                dispatch(resetPasswordSendCodeThunk());
                break;
            case 'third':
                dispatch(resetPasswordSubmitThunk()).then((data) => {
                    if (
                        data.type ===
                        'resetPasswordFormSlice/resetPasswordSubmitThunk/fulfilled'
                    )
                        navigate('/auth');
                });
                break;
            default:
                break;
        }
    };

    return (
        <form className={css.resetPasswordForm + ' form form--fixed-width'}>
            <h3 className="form__title">Восстановление пароля</h3>
            {isSuccess ? (
                <>
                    <ul className={css.resetPasswordForm__inner}>
                        {Object.values(fields[currentScreen]).map((field) => (
                            <li
                                key={field.name}
                                className={
                                    css.resetPasswordForm__item +
                                    ' ' +
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
                    {isError && (
                        <p className="bg-red-200 border-2 border-red-600 px-3 py-2 rounded-small">
                            {error}
                        </p>
                    )}
                    <Button
                        cssClass="form__button"
                        text="Восстановить"
                        clickHandler={resetPasswordSubmitAction}
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
};
