import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './logo.module.sass';


const logo = (props) => {
    let cssLine;

    switch (props.type) {
        case 'small':
            cssLine = `${css.logo} ${css['logo--small']}`
            break;
        case 'medium':
            cssLine = `${css.logo} ${css['logo--medium']}`
            break;
        case 'large':
            cssLine = `${css.logo} ${css['logo--large']}`
            break;
        default:
            cssLine = css.logo
            break;
    }

    return (
        <NavLink to="/" className={cssLine}>
            <i>MY-shCOOL</i>
        </NavLink>
    );
}

export default logo;