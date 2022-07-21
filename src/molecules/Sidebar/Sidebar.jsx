import React from 'react';
import css from './Sidebar.module.sass';

export class Sidebar extends React.PureComponent {
    render() {
        const { cssClass, title, children } = this.props;

        return (
            <aside className={`${css.sidebar} ${cssClass}`}>
                <h2 className="title1">{title}</h2>
                <ul className={css.sidebar__list}>
                    {children}
                </ul>
            </aside>
        );
    }
}

Sidebar.defaultProps = {
    cssClass: ""
}