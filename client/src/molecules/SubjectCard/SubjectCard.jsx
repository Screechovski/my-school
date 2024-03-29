import React from "react";
import {NavLink} from "react-router-dom";
import css from "./SubjectCard.module.sass";

export const SubjectCard = ({image, title, id}) => {
    return (
        <NavLink to={"/subject/" + id} className={css.subjectCard}>
            <img
                className={css.subjectCard__icon}
                src={image}
                alt={"Иконка " + title}
            />
            <span className={css.subjectCard__title + " link"}>{title}</span>
        </NavLink>
    );
};

export const SubjectCardLoading = () => {
    return (
        <div className={css.subjectCard}>
            <div className={css.subjectCardLoading__icon + " loading"} />
            <div className={css.subjectCardLoading__title + " loading"} />
        </div>
    );
};
