import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import css from "./IndexSection.module.sass";

export const IndexSection = (props) => {
    const {name, nameAll, children, linkPath} = props;

    return (
        <li className={css.indexSection}>
            <div className={css.indexSection__header}>
                <h3 className={css.indexSection__headerTitle + " title2"}>
                    {name}
                </h3>
                <NavLink className={css.indexSection__headerLink} to={linkPath}>
                    {nameAll}
                </NavLink>
            </div>

            <div className={css.indexSection__inner}>{children}</div>
        </li>
    );
};

IndexSection.propTypes = {
    name: PropTypes.string.isRequired,
    nameAll: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
