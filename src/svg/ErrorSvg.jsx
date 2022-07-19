import React from "react";


const ErrorSvg = (props) => {
    const { cssClass } = props;
    const cssClassName = cssClass ?? "svg";

    return (
        <svg className={cssClassName} viewBox="0 0 36 36" version="1.1">
            <path d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z"></path>
            <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
        </svg>
    )
}

ErrorSvg.defaultProps = {
    cssClass: null
}

export default ErrorSvg;