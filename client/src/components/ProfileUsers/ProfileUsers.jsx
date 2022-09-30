import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getUsers} from '../../api/profile';
import {Loader} from '../../molecules/CoolLoader/Loader';
import {QUERY_CONFIG} from '../../assets/constants';
import {ProfileUserItem} from './ProfileUserItem';
import css from './ProfileUsers.module.sass';

export const ProfileUsers = () => {
    const {isLoading, isSuccess, data} = useQuery(
        ['profile-users'],
        getUsers,
        QUERY_CONFIG
    );

    if (isLoading) {
        return (
            <div className="p-6 flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (isSuccess) {
        return (
            <ul className={css.profileUser}>
                {data.data.map((user) => (
                    <li className={css.profileUser__item} key={user.id}>
                        <ProfileUserItem
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            surname={user.surname}
                            patronymic={user.patronymic}
                            phone={user.phone}
                            email={user.email}
                            role={user.role}
                            active={user.active}
                        />
                    </li>
                ))}
            </ul>
        );
    }

    return <span></span>;
};

ProfileUsers.defaultProps = {
    isChanged: false
};
