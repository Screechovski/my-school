import React from 'react';
import css from './educatorCard.module.sass';

const educatorCard = (props) => {
    return (
        <div className={css['educator-card']}>
            <div className={css['educator-card__image-wrap']}>
                <img className={css['educator-card__image']} src="https://thispersondoesnotexist.com/image" alt=""/>
            </div>
            <div className={css['educator-card__body']}>
                <h2 className={css['educator-card__title']}>{props.name}</h2>
                <p className={css['educator-card__profession']}>Завуч</p>
                <a href="mailto:afuhopap-5912@yopmail.com" className={css['educator-card__mail']}>afuhopap-5912@yopmail.com</a>
            </div>
        </div>
    );
}

export default educatorCard;