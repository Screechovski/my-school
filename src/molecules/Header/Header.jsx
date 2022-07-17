import React from 'react';
import Logo from '@/molecules/Logo/Logo';
import Navigation from '@/molecules/Navigation/Navigation';
import css from './Header.module.sass';

const Header = () => {
    return (
        <header className={css.header + " r-container"}>
            <div className={css.header__container}>
                <Logo type="medium" />
                <Navigation />
            </div>
        </header>
    )
}
export default Header;