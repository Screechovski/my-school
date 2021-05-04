import React from 'react';
import css from './subjectCard.module.sass';

const subjectCard = (props) => {
    return (
        <a href="#asd" className={css['subject-card']}>
            <img className={css['subject-card__icon']} src={props.image} alt=""/>
            <span className={css['subject-card__title']}>{props.title}</span>
        </a>
    );
}

export default subjectCard;