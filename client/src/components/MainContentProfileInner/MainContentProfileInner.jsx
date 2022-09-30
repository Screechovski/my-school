import React from 'react';
import {useSelector} from 'react-redux';
import {Loader} from '../../molecules/CoolLoader/Loader';
import {MainContent} from '../../molecules/MainContent/MainContent';
import {ProfileUsers} from '../ProfileUsers/ProfileUsers';
import {ProfileEducators} from '../ProfileEducators/ProfileEducators';
import {ProfileSubjects} from '../ProfileSubjects/ProfileSubjects';
import {ErrorLine} from '../../molecules/ErrorLine/ErrorLine';

export const MainContentProfileInner = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        isAuthorized
    } = useSelector((state) => state.userReducer);
    const {tabs, currentTab} = useSelector((state) => state.profileReducer);

    const refetch = () => {};

    const getCurrentComponent = () => {
        switch (currentTab) {
            case 'personal':
                return <span>personal 1 2</span>;
            case 'users':
                return <ProfileUsers />;
            case 'subjects':
                return <ProfileSubjects />;
            case 'educators':
                return <ProfileEducators />;
            case 'news':
                return <span>news</span>;
            case 'events':
                return <span>events</span>;
        }
    };

    const getTitle = () => {
        if (isSuccess && isAuthorized) {
            return tabs[currentTab].label;
        }
        return '...';
    };

    return (
        <MainContent cssClass="page__mainContainer" title={getTitle()}>
            {isLoading && (
                <div className="p-6 flex items-center justify-center">
                    <Loader />
                </div>
            )}

            {isSuccess && isAuthorized && getCurrentComponent()}

            {isError && <ErrorLine message={'error.error'} reload={refetch} />}
        </MainContent>
    );
};
