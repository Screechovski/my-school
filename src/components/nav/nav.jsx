import React from 'react';
import './nav.sass';

const navLins = ['Главная','О школе','Новости','Направления','Педагоги', 'Разное'];

const nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {navLins.map((item,index)=>{
                    return <li className="nav__item" key={index}>
                        <a className="nav__link" href={"#" + index}>{item}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default nav;