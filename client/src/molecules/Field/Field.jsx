import React from "react";
import PropTypes from "prop-types";
import css from "./Field.module.sass";
import {FieldPassword} from "./FieldPassword";
import {FieldInput} from "./FieldInput";

export const Field = ({
    name,
    type,
    headline,
    placeholder,
    value,
    change,
    blur,
    isValid,
    isLoading,
    isDisabled,
    cssClass
}) => {
    const changeProxy = (e) => change(e.target.value);

    const getClassName = () => {
        let className = css.field__input;

        if (cssClass) {
            className += " " + cssClass;
        }
        if (isDisabled) {
            className += ` ${css.field__input_disabled}`;
        }
        if (isValid) {
            className += ` ${css.field__input_success}`;
        }
        if (isValid === false) {
            className += ` ${css.field__input_fail}`;
        }

        return className;
    };

    switch (type) {
        case "input": {
            return (
                <FieldInput
                    attr={{
                        name
                    }}
                    headline={headline}
                    blur={blur}
                    change={changeProxy}
                    placeholder={placeholder}
                    value={value}
                    cssClassInput={getClassName()}
                />
            );
        }
        case "password": {
            return (
                <FieldPassword
                    attr={{
                        name
                    }}
                    headline={headline}
                    blur={blur}
                    change={changeProxy}
                    placeholder={placeholder}
                    value={value}
                    cssClassInput={getClassName()}
                />
            );
        }
    }
};

Field.defaultProps = {
    cssClass: ""
};

Field.propTypes = {
    type: PropTypes.oneOf([
        "input",
        "textarea",
        "checkbox",
        "radio",
        "password"
    ]).isRequired
};
