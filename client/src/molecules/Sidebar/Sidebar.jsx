import React from 'react';
import css from './Sidebar.module.sass';

export class Sidebar extends React.PureComponent {
    render() {
        const {cssClass, title, children} = this.props;

        return (
            <aside className={`${css.sidebar} ${cssClass}`}>
                {title && (
                    <h2 className={css.sidebar__title + ' title1'}>{title}</h2>
                )}
                {children}
            </aside>
        );
    }
}

Sidebar.defaultProps = {
    cssClass: '',
    title: ''
};
