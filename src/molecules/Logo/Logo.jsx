import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';
import css from './logo.module.sass';

export const Logo = memo((props) => {
    const { type, cssClass } = props;
    let cssLine;

    switch (type) {
        case 'small':
        case 'medium':
        case 'large':
            cssLine = `${css.logo} ${css['logo--' + type]}`
            break;
        default:
            cssLine = css.logo
            break;
    }

    cssLine += ` ${cssClass}`

    return (
        <NavLink to="/" className={cssLine}>
            <i>MY-shCOOL</i>
        </NavLink>
    );
})

Logo.defaultProps = {
    cssClass: "",
    type: ""
}