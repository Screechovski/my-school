import React from 'react';
import css from './subjectCard.module.sass';
import { NavLink } from 'react-router-dom';

const subjectCard = (props) => {
    return (
        <NavLink to={props.to} className={css['subject-card']}>
            <img className={css['subject-card__icon']} src={props.image} alt=""/>
            <span className={css['subject-card__title']}>{props.title}</span>
        </NavLink>
    );
}

export default subjectCard;