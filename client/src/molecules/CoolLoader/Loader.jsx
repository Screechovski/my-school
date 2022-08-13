import React from "react";
import PropTypes from "prop-types";
import css from "./Loader.module.sass";

export const Loader = ({cssClass, colored}) => {
    return (
        <div
            className={`${css.loader} ${cssClass} ${
                colored ? css.loader_colored : ""
            }`}
        >
            <i className={css.loader__firstCircle} />
            <i className={css.loader__secondCircle} />
        </div>
    );
};

Loader.propTypes = {
    cssClass: PropTypes.string
};

Loader.defaultProps = {
    cssClass: "",
    colored: false
};
