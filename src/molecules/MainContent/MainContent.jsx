import React, {memo} from 'react';
import css from './MainContent.module.sass';

export const MainContent = memo(({
    cssClass,
    title,
    children
}) => {
    return (
        <section className={`${cssClass} ${css.mainContent}`}>
            {title &&
                <h2 className={css.mainContent__title + " title1"}>{title}</h2>}

            {children && children}
        </section>
    )
});

MainContent.defaultProps = {
    cssClass: ""
}