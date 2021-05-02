import React from 'react';
import RNav from './../nav/nav';
import './header.sass';

const rHeader = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">MY-shCOOL</div>
                <RNav></RNav>
            </div>
        </header>
    )
}
export default rHeader;