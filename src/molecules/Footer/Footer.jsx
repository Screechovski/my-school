import React from 'react';
import Logo from '@/molecules/Logo/Logo';
import css from './Footer.module.sass';

const Footer = () => {
    return (
        <footer className={css.footer + " r-container"}>
            <div className={css.footer__container}>
                <Logo type="small" />
                <p className={css.footer__copyright}>© Все права не защищены,<br/>судиться бессмысленно денег у меня нет!</p>
            </div>
        </footer>
    );
}

export default Footer;