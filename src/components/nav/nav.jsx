//react
import React from 'react';
//components
import RNavLink from '../navigationLink/navigationLink';
//css
import css from './nav.module.sass';

const nav = ({ navLinks }) => {
    return (
        <nav className={css.nav}>
            <ul className={css.nav__list}>
                {navLinks.map((item, index) => <li className={css.nav__item} key={index}>
                    <RNavLink linkUrl={item.path} linkText={item.value} />
                </li>)}
            </ul>
        </nav>
    )
}

export default nav;