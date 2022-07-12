import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './educatorCard.module.sass';

const educatorCard = ({ image, name, email, educatorId }) => {
    return (
        <div className={css['educator-card']}>
            <NavLink className={css['educator-card__main-link']} to={`/educators-inner/${educatorId}`} />
            <div className={css['educator-card__image-wrap']}>
                <img className={css['educator-card__image']} src={image} alt="" />
            </div>
            <div className={css['educator-card__body']}>
                <h2 className={css['educator-card__title']}>{name}</h2>
                <p className={css['educator-card__profession']}>Педагог</p>
                <a href={`mailto:${email}`} className={css['educator-card__mail']}>{email}</a>
            </div>
        </div>
    );
}

export default educatorCard;