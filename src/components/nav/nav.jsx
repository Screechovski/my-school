//react
import React from 'react';
//components
import RNavLink from '../navigationLink/navigationLink';
//css
import css from './nav.module.sass';
//state
import state from './../../redux/state';

const nav = () => {
    const navLins = state.getNav();

    return (
        <nav className={css.nav}>
            <ul className={css.nav__list}>
                {navLins.map((item,index)=>{
                    return <li className={css.nav__item} key={index}>
                        <RNavLink linkUrl={item.path} linkText={item.value} />
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default nav;