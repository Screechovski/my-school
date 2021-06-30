import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './educatorCard.module.sass';
import state from './../../state';

const educatorCard = (props) => {
    const currentEducator = state.getEducator(Number(props.educatorId));
    
    return (
        <div className={css['educator-card']}>
            <NavLink className={css['educator-card__main-link']} to={`/educators-inner/${props.educatorId}`}/>
            <div className={css['educator-card__image-wrap']}>
                <img className={css['educator-card__image']} src={currentEducator.image} alt=""/>
            </div>
            <div className={css['educator-card__body']}>
                <h2 className={css['educator-card__title']}>{currentEducator.name}</h2>
                <p className={css['educator-card__profession']}>Педагог</p>
                <a href={`mailto:${props.email}`} className={css['educator-card__mail']}>{currentEducator.email}</a>
            </div>
        </div>
    );
}

export default educatorCard;