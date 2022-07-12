import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './navigationLink.module.sass';

const navigationLink = (props) =>
    <NavLink className={css.nav_link} to={props.linkUrl}>{props.linkText}</NavLink>;

export default navigationLink;