import React from 'react';
import css from './sidebar.module.sass';

const sidebar = (props) => {
    return (
        <aside className={`${css.sidebar} ${props.parentClass}`}>
            <h2 className={css.sidebar__title}>{props.title}</h2>
            <ul className={css.sidebar__list}>
                {props.slot.map((item, index)=><li className={css.sidebar__item} key={index}>{item}</li>)}
            </ul>
        </aside>
    );
}

export default sidebar;