import React from "react";
import css from "./Button.module.sass";

export const Button = ({
    href,
    text,
    clickHandler,
    loading,
    disabled
}) => {
    const clickHandlerProxy = (e) => {
        if (!disabled && !loading) {
            clickHandler(e);
        }
    }

    if (href && !clickHandler) {
        return <a
            href={href}
            className={css.button + " " + css.button_link}
        >
            <span>{text}</span>
        </a>
    }

    if (clickHandler && !href) {
        return <button
            className={css.button + " " + css.button_button}
            type="button"
            onClick={clickHandlerProxy}
        >
            <span>{text}</span>
        </button>
    }

    throw Error("")
}

Button.defaultProps = {
    clickHandler: null,
    href: null,
    disabled: false,
    loading: false
}
