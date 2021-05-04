import React from 'react';
import css from './navLink.module.sass';

const navLink = (props) => {
    return (
        <a className={css.nav_link} href={props.linkUrl}>{props.linkText}</a>
    )
}

export default navLink;