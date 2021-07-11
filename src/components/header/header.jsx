import React from 'react';
import NavContainer from './../nav/navContainer';
import RLogo from './../logo/logo';
import css from './header.module.sass';

const rHeader = ({navLinks}) => {
    return (
        <header className={css.header}>
            <div className={css.header__container + " r-container"}>
                <RLogo type="medium"></RLogo>
                <NavContainer/>
            </div>
        </header>
    )
}
export default rHeader;