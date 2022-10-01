import React from 'react';
import PropTypes from 'prop-types';
import css from './Loader.module.sass';

export const LoaderWrapper = ({children}) => {
    return (
        <div className="p-6 flex items-center justify-center bg-blue-500 rounded-medium w-fit mx-auto">
            {children}
        </div>
    );
};

export const Loader = ({cssClass, colored}) => {
    return (
        <div
            className={`${css.loader} ${cssClass} ${
                colored ? css.loader_colored : ''
            }`}
        >
            <i className={css.loader__firstCircle} />
            <i className={css.loader__secondCircle} />
        </div>
    );
};

Loader.propTypes = {
    cssClass: PropTypes.string
};

Loader.defaultProps = {
    cssClass: '',
    colored: false
};
