//react
import React from 'react';
import { NavLink } from 'react-router-dom';
//css
import css from './subjectCard.module.sass';
//state   
import state from './../../state';

const subjectCard = (props) => {
    const subject = state.getSubject(props.id);
    return (
        <NavLink to={"/subjects-inner/"+props.id} className={css['subject-card']}>
            <img className={css['subject-card__icon']} src={subject.image} alt=""/>
            <span className={css['subject-card__title']}>{subject.title}</span>
        </NavLink>
    );
}

export default subjectCard;