import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import css from './EducatorCard.module.sass';

export const EducatorCard = memo(({
    image,
    name,
    email,
    id
}) => {
    return (
        <div className={css.educatorCard}>
            <NavLink className={css.educatorCard__mainLink} to={`/educators-inner/${id}`} />
            <div className={css.educatorCard__imageWrap}>
                <img className={css.educatorCard__image} src={image} alt="" />
            </div>
            <div className={css.educatorCard__body}>
                <h2 className={css.educatorCard__title}>{name}</h2>
                <p className={css.educatorCard__profession}>Педагог</p>
                <a href={`mailto:${email}`} className={css.educatorCard__mail}>{email}</a>
            </div>
        </div>
    );
})