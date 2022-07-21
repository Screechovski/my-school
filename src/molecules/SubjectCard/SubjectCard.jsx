import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';
import css from './SubjectCard.module.sass';

export const SubjectCard = memo(({ image, title, id }) => {
    return (
        <NavLink to={"/subjects-inner/" + id} className={css.subjectCard}>
            <img className={css.subjectCard__icon} src={image} alt={"Иконка " + title}  />
            <span className={css.subjectCard__title}>{title}</span>
        </NavLink>
    );
})