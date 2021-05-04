import React from 'react';
import css from './nav_link.module.sass';

const navLink = (props) => {
    return (
        <a className={css.nav_link} href={props.linkUrl}>{props.linkText}</a>
    )
}

export default navLink;