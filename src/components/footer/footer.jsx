import React from 'react';
import RLogo from './../logo/logo';
import css from './footer.module.sass';


const footer = (props) => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__container + " container"}></div>
        </footer>
    );
}

export default footer;