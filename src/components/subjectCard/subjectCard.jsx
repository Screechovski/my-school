//react
import React from 'react';
import { NavLink } from 'react-router-dom';
//css
import css from './subjectCard.module.sass';

const subjectCard = ({image, title, id}) => {
    return (
        <NavLink to={"/subjects-inner/"+id} className={css['subject-card']}>
            <img className={css['subject-card__icon']} src={image} alt=""/>
            <span className={css['subject-card__title']}>{title}</span>
        </NavLink>
    );
}

export default subjectCard;