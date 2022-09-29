import React from 'react';
import {ErrorSvg} from '@/svg/ErrorSvg';
import {ReloadSvg} from '../../svg/ReloadSvg';
import css from './ErrorLine.module.sass';

export const ErrorLine = ({message, reload}) => {
    return (
        <div className={css.errorLine}>
            <div className={css.errorLine__header}>
                <i className={css.errorLine__headerIcon}>
                    <ErrorSvg cssClass={css.errorLineIcon} />
                </i>
                <p>Произошла ошибка</p>
                <button
                    type="button"
                    className={css.errorLine__headerButton}
                    onClick={reload}
                >
                    <ReloadSvg cssClass={css.errorLineReload} />
                </button>
            </div>
            {message && <p className={css.errorLine__text}>{message}</p>}
        </div>
    );
};
