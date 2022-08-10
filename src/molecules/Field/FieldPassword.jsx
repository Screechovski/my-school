import css from "./Field.module.sass";
import React, {useState} from "react";
import {EyeSlashSVG} from "../../svg/EyeSlashSVG";
import {EyeSVG} from "../../svg/EyeSVG";

export const FieldPassword = ({
    headline,
    blur,
    change,
    placeholder,
    cssClassInput,
    value,
    attr
}) => {
    const [hidden, setHidden] = useState(true);

    return (
        <label className={css.field + " " + css.field_password}>
            {headline && (
                <span className={css.field__headline}>{headline}</span>
            )}
            <div className={css.field__inner}>
                <input
                    {...attr}
                    className={cssClassInput}
                    onBlur={blur}
                    onChange={change}
                    type={hidden ? "password" : "text"}
                    value={value}
                    placeholder={placeholder}
                />
                {/*<button onClick={() => setHidden(!hidden)}>*/}
                {/*    {hidden ? <EyeSlashSVG /> : <EyeSVG />}*/}
                {/*</button>*/}
            </div>
        </label>
    );
};

FieldPassword.defaultProps = {
    attr: {}
};
