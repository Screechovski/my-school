import React from 'react';
import NavLink from '../navLink/navLink';
// import { Button } from 'react-bootstrap';
import css from './nav.module.sass';

const navLins = ['Главная','О школе','Новости','Предметы','Педагоги', 'Разное'];

const nav = () => {
    return (
        <nav className={css.nav}>
            <ul className={css.nav__list}>
                {navLins.map((item,index)=>{
                    return <li className={css.nav__item} key={index}>
                        <NavLink linkUrl={"#" + index} linkText={item} />
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default nav;