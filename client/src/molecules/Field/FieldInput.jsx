import css from "./Field.module.sass";
import React from "react";

export const FieldInput = ({
    headline,
    cssClassInput,
    blur,
    change,
    value,
    placeholder,
    attr
}) => {
    return (
        <label className={css.field + " " + css.field_input}>
            {headline && (
                <span className={css.field__headline}>{headline}</span>
            )}
            <div className={css.field__inner}>
                <input
                    {...attr}
                    className={cssClassInput}
                    onBlur={blur}
                    onChange={change}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </label>
    );
};

FieldInput.defaultProps = {
    attr: {}
};
