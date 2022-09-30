import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Button} from '../../molecules/Button/Button';
import {Loader} from '../../molecules/CoolLoader/Loader';
import {Sidebar} from '../../molecules/Sidebar/Sidebar';
import { changeTab } from '../../store/profile/profileSlice';
import {userLogout} from '../../store/user/userSlice';
import css from './SidebarProfile.module.sass';

export const SidebarProfile = () => {
    const {data, isLoading, isSuccess, isAuthorized} = useSelector(
        (state) => state.userReducer
    );
    const {tabs} = useSelector((state) => state.profileReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutClickHandle = async () => {
        const logoutResult = await dispatch(userLogout());

        if (logoutResult.type === 'user/userLogout/fulfilled') {
            navigate('/');
        }
    };

    const getTabsByRole = () =>
        Object.values(tabs).filter(({roles}) => roles.includes(data.role));

    const changeTabHandle = (tab) => () => {
        dispatch(changeTab({tab}));
    };

    useEffect(() => {
        if (isSuccess && !isAuthorized) {
            navigate('/');
        }
    });

    return (
        <Sidebar cssClass="page__sidebar">
            {isLoading && (
                <div className="p-6 flex items-center justify-center">
                    <Loader />
                </div>
            )}

            {isSuccess && isAuthorized && (
                <div className={css.sidebarProfile}>
                    <ul className={css.sidebarProfile__list}>
                        {getTabsByRole().map((tab) => (
                            <li
                                key={tab.name}
                                className={css.sidebarProfile__item}
                            >
                                <button
                                    className={css.sidebarProfile__button}
                                    onClick={changeTabHandle(tab.name)}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <Button
                        cssClass={css.sidebarProfile__logoutButton}
                        clickHandler={logoutClickHandle}
                        text="Выйти"
                    />
                </div>
            )}
        </Sidebar>
    );
};
