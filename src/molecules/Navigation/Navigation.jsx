import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';
import { CONSTANTS } from '../../assets/constants';
import css from './Navigation.module.sass';

export const Navigation = memo(() => {
    return (
        <nav className={css.nav}>
            <ul className={css.nav__list}>
                {Object.values(CONSTANTS.NAV_LINKS).map((item, index) =>
                    <li className={css.nav__item} key={index}>
                        <NavLink className={css.nav__link} to={item.path}>{item.value}</NavLink>
                    </li>)}
            </ul>
        </nav>
    )
})