import React from 'react';
import RNavLink from '../navigationLink/navigationLink';
import css from './nav.module.sass';

const navLins = [{
    value: 'Главная',
    path: '/'
},{
    value: 'О школе',
    path: '/about'
},{
    value: 'Новости',
    path: '/news'
},{
    value: 'Предметы',
    path: '/subjects'
},{
    value: 'Педагоги',
    path: '/educators'
}, {
    value: 'Разное',
    path: '/miscellanea'
}];

const nav = () => {
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