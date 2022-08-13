import React from "react";
import css from "./Button.module.sass";
import {Loader} from "../CoolLoader/Loader";

export const Button = ({
    cssClass,
    href,
    text,
    clickHandler,
    loading,
    disabled
}) => {
    const getClassName = (addedClass) => {
        let className = css.button;

        if (addedClass) {
            className += ` ${addedClass}`;
        }
        if (cssClass) {
            className += ` ${cssClass}`;
        }
        if (disabled) {
            className += ` ${css.button_disabled}`;
        }
        if (loading) {
            className += ` ${css.button_loading}`;
        }

        return className;
    };

    const clickHandlerProxy = (e) => {
        if (!disabled && !loading) {
            clickHandler(e);
        }
    };

    if (href && !clickHandler) {
        return (
            <a href={href} className={getClassName(null)}>
                {loading ? (
                    <Loader cssClass={css.button__loader} />
                ) : (
                    <span>{text}</span>
                )}
            </a>
        );
    }

    if (clickHandler && !href) {
        return (
            <button
                className={getClassName(null)}
                type="button"
                onClick={clickHandlerProxy}
            >
                {loading ? (
                    <Loader cssClass={css.button__loader} />
                ) : (
                    <span>{text}</span>
                )}
            </button>
        );
    }

    throw Error("");
};

Button.defaultProps = {
    clickHandler: null,
    href: null,
    disabled: false,
    loading: false
};
