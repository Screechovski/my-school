import React, {memo} from "react";
import {ErrorSvg} from "@/svg/ErrorSvg";
import css from "./ErrorLine.module.sass";
import {ReloadSvg} from "../../svg/ReloadSvg";

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
            <p className={css.errorLine__text}>{message}</p>
        </div>
    );
};
