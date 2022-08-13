import React from "react";
import css from "./MainForm.module.sass";

export const MainForm = ({children, cssClass}) => {
    return (
        <div className={css.pageForm + " r-container " + cssClass}>
            {children && children}
        </div>
    );
};
