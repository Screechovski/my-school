import React, {memo} from 'react';
import { Logo } from '@/molecules/Logo/Logo';
import { Navigation } from '@/molecules/Navigation/Navigation';
import css from './Header.module.sass';

export const Header = memo(() => {
    return (
        <header className={css.header + " r-container"}>
            <div className={css.header__container}>
                <Logo type="medium" />
                <Navigation />
            </div>
        </header>
    )
})