import React from 'react';
import { ErrorSvg } from '@/svg/ErrorSvg';
import css from "./ErrorLine.module.sass";

export const ErrorLine = (props) => {
    const { message } = props;

    return (
        <div className={css.errorLine}>
            <div className={css.errorLine__header}>
                <ErrorSvg cssClass={css.errorLine__header_svg} />
                <p>Произошла ошибка</p>
            </div>
            <p className={css.errorLine__text}>{message}</p>
        </div>
    )
}