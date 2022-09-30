import React from 'react';
import css from './UserAvatar.module.sass';

export const UserAvatar = ({src, readonly}) => {
    if (readonly) {
        return (
            <div className={css.userAvatar}>
                {src ? (
                    <img
                        className={css.userAvatar__image}
                        src={src}
                        alt=""
                        height="100px"
                        width="100px"
                    />
                ) : (
                    <img
                        className={css.userAvatar__image}
                        src="/img/other/user-placeholder.png"
                        alt=""
                        height="100px"
                        width="100px"
                    />
                )}
            </div>
        );
    }

    return <span></span>;
};