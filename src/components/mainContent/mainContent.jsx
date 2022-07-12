import React from 'react';
import css from './mainContent.module.sass';

const mainContent = ({ parentClass, title, typeContent, slot, children }) => {
    return (
        <main className={`${parentClass} ${css['main-content']}`}>
            {title &&
                <h2 className={css['main-content__title']} >{title}</h2>}

            {typeContent &&
                <div className={css['main-content--' + typeContent]} >{slot}{children}</div>}
        </main>
    )
}

export default mainContent;