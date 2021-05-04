import React from 'react';
import RNav from './../nav/nav';
import RLogo from './../logo/logo';
import css from './header.module.sass';

const rHeader = () => {
    return (
        <header className={css.header}>
            <div className={css.header__container + " r-container"}>
                <RLogo type="medium"></RLogo>
                <RNav></RNav>
            </div>
        </header>
    )
}
export default rHeader;