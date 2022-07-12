import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './logo.module.sass';


const logo = (props) => {
    let cssLine;

    switch (props.type) {
        case 'small':
        case 'medium':
        case 'large':
            cssLine = `${css.logo} ${css['logo--' + props.type]}`
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