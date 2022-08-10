import React from "react";

export const WarningIconSVG = ({cssClass}) => {
    return (
        <svg
            className={cssClass}
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{enableBackground: "new 0 0 512 512"}}
        >
            <path d="M437.016,74.984c-99.979-99.979-262.075-99.979-362.033,0.002c-99.978,99.978-99.978,262.073,0.004,362.031 c99.954,99.978,262.05,99.978,362.029-0.002C536.995,337.059,536.995,174.964,437.016,74.984z M406.848,406.844 c-83.318,83.318-218.396,83.318-301.691,0.004c-83.318-83.299-83.318-218.377-0.002-301.693 c83.297-83.317,218.375-83.317,301.691,0S490.162,323.549,406.848,406.844z" />
            <path d="M255.996,85.338c-11.782,0-21.333,9.551-21.333,21.333v213.333c0,11.782,9.551,21.333,21.333,21.333 c11.782,0,21.333-9.551,21.333-21.333V106.671C277.329,94.889,267.778,85.338,255.996,85.338z" />
            <path d="M255.996,384.004c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333c11.776,0,21.333-9.557,21.333-21.333 S267.772,384.004,255.996,384.004z" />
        </svg>
    );
};

WarningIconSVG.defaultProps = {
    cssClass: ""
};
