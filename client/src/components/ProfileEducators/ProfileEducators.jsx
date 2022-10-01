import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {QUERY_CONFIG} from '../../assets/constants';
import {Loader} from '../../molecules/CoolLoader/Loader';
import {getEducators} from '../../api/profile';

// TODO вынести запрос в container
export const ProfileEducators = () => {
    const {isLoading, isSuccess} = useQuery(
        ['profile-educators'],
        getEducators,
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
        return <ul></ul>;
    }

    return <span></span>;
};
