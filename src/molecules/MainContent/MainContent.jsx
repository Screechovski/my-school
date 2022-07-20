import React, {memo} from 'react';
import css from './MainContent.module.sass';

export const MainContent = memo(({
    parentClass,
    title,
    typeContent,
    slot,
    children
}) => {
    return (
        <main className={`${parentClass} ${css.mainContent}`}>
            {title &&
                <h2 className={css.mainContent__title} >{title}</h2>}

            {typeContent &&
                <div className={css['mainContent_' + typeContent]} >{slot}{children}</div>}
        </main>
    )
});