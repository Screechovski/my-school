import React from "react";
import {NavLink} from "react-router-dom";
import css from "./EducatorCard.module.sass";

export const EducatorCard = ({image, name, email, id}) => {
    return (
        <div className={css.educatorCard}>
            <NavLink
                className={css.educatorCard__mainLink}
                to={`/educator/${id}`}
            />
            <div>
                <img className={css.educatorCard__image} src={image} alt="" />
            </div>
            <div className={css.educatorCard__body}>
                <h2 className={css.educatorCard__title}>{name}</h2>
                <p className={css.educatorCard__profession}>Педагог</p>
                <a
                    href={`mailto:${email}`}
                    className={css.educatorCard__mail + " link"}
                >
                    {email}
                </a>
            </div>
        </div>
    );
};

export const EducatorCardLoading = () => {
    return (
        <div className={css.educatorCard}>
            <div className={css.educatorCardLoading__image + " loading"}></div>
            <div className={css.educatorCardLoading__body}>
                <div
                    className={css.educatorCardLoading__title + " loading"}
                ></div>
                <div
                    className={css.educatorCardLoading__profession + " loading"}
                ></div>
                <div
                    className={css.educatorCardLoading__mail + " loading"}
                ></div>
            </div>
        </div>
    );
};
