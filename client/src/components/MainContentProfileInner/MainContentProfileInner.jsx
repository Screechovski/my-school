import React from 'react';
import {useSelector} from 'react-redux';
import {Loader} from '../../molecules/CoolLoader/Loader';
import {MainContent} from '../../molecules/MainContent/MainContent';

export const MainContentProfileInner = () => {
    const {data, isLoading, isSuccess, isError, error} = useSelector(
        (state) => state.userReducer
    );

    const refetch = () => {};

    return (
        <MainContent cssClass="page__mainContainer" title="Ваш профиль">
            {isLoading && (
                <div className="p-6 flex items-center justify-center">
                    <Loader />
                </div>
            )}

            {isSuccess && <p>{JSON.stringify(data)}</p>}

            {isError && <ErrorLine message={'error.error'} reload={refetch} />}
        </MainContent>
    );
};
