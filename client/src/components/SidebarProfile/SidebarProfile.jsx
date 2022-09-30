import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Loader } from '../../molecules/CoolLoader/Loader';
import {Sidebar} from '../../molecules/Sidebar/Sidebar';
import {userLogout} from '../../store/user/userSlice';

export const SidebarProfile = () => {
    const {data, isLoading, isSuccess, isAuthorized} = useSelector((state) => state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutClickHandle = async () => {
        const logoutResult = await dispatch(userLogout());

        if (logoutResult.type === 'user/userLogout/fulfilled') {
            navigate('/');
        }
    };

    useEffect(() => {
        if (isSuccess && !isAuthorized) {
            navigate('/')
        }
    })

    return (
        <Sidebar cssClass="page__sidebar">
            {isLoading &&
                <div className='p-6 flex items-center justify-center'>
                    <Loader />
                </div>}

            {isSuccess &&
                <ul>
                    <li>profile</li>
                    <li>
                        <button onClick={logoutClickHandle}>logout</button>
                    </li>
                </ul>}
        </Sidebar>
    );
};
