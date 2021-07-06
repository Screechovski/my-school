import React from 'react';
import RLogo from './../logo/logo';
import css from './footer.module.sass';


const footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__container + " r-container"}>
                <RLogo type="small" />
                <p className={css.footer__copyright}>© Все права не защищены,<br/>судиться бессмысленно денег у меня нет!</p>
            </div>
        </footer>
    );
}

export default footer;