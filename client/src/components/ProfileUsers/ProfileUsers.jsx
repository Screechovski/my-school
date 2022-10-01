import React, {useCallback, useEffect} from 'react';
import {Loader, LoaderWrapper} from '../../molecules/CoolLoader/Loader';
import {ProfileUserItem} from '../../molecules/ProfileUserItem/ProfileUserItem';
import {Popup, PopupInner, PopupTitle} from '../../molecules/Popup/Popup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Button} from '../../molecules/Button/Button';
import css from './ProfileUsers.module.sass';
import {useDispatch, useSelector} from 'react-redux';
import {
    profileUsersClosePopup,
    profileUsersInitThunk,
    profileUsersSelectUser,
    profileUsersSubmitThunk,
    setUserActive,
    setUserRole
} from '../../store/profileUsers/profileUsersSlice';
import {ErrorLine} from '../../molecules/ErrorLine/ErrorLine';

const ProfileUserPopup = ({
    onClose,
    title,

    userRole,
    changeUserRole,
    userRoles,

    userIsActive,
    changeUserIsActive,

    disabled,
    onSubmit
}) => {
    return (
        <Popup onClose={onClose}>
            <PopupInner onClose={onClose}>
                <PopupTitle>{title}</PopupTitle>
                <div className="flex flex-col gap-2">
                    <FormControl fullWidth size="small">
                        <InputLabel id="user-role">
                            Роль пользователя
                        </InputLabel>
                        <Select
                            labelId="user-role"
                            id="user-role"
                            value={userRole}
                            label="Роль пользователя"
                            onChange={changeUserRole}
                        >
                            {userRoles.map((value) => (
                                <MenuItem key={value} value={value}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={userIsActive}
                                onChange={changeUserIsActive}
                            />
                        }
                        label="Статус аккаунта"
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        text="Сохранить"
                        disabled={disabled}
                        clickHandler={onSubmit}
                    />
                </div>
            </PopupInner>
        </Popup>
    );
};

export const ProfileUsers = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        data,
        error,
        isOpened,
        selectedUser,
        userRoles
    } = useSelector((state) => state.profileUsersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileUsersInitThunk());
    }, []);

    const onClickHandle = (user) => () => {
        dispatch(profileUsersSelectUser(user));
    };

    const closePopupHandler = () => {
        dispatch(profileUsersClosePopup());
    };

    const setUserRoleHandler = (e) => {
        dispatch(setUserRole(e.target.value));
    };

    const setUserActiveHandler = () => {
        dispatch(setUserActive(!selectedUser.active));
    };

    const submitHandler = () => {
        dispatch(profileUsersSubmitThunk());
    };

    const isChanged = useCallback(() => {
        if (!isOpened) return false;

        return !!data.find(
            (user) =>
                user.id === selectedUser.id &&
                user.active === selectedUser.active &&
                user.role === selectedUser.role
        );
    }, [selectedUser]);

    const getTitle = useCallback(
        () => `Редактировать пользователя ${selectedUser.name}`,
        [selectedUser]
    );

    if (isLoading) {
        return (
            <LoaderWrapper>
                <Loader />
            </LoaderWrapper>
        );
    }

    if (isError) {
        return <ErrorLine message={error} />;
    }

    if (isSuccess) {
        return (
            <>
                <ul className={css.profileUser}>
                    {data.map((user) => (
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
                                onClick={onClickHandle(user)}
                            />
                        </li>
                    ))}
                </ul>

                {isOpened && (
                    <ProfileUserPopup
                        onClose={closePopupHandler}
                        title={getTitle()}
                        userRole={selectedUser.role}
                        changeUserRole={setUserRoleHandler}
                        userRoles={userRoles}
                        userIsActive={selectedUser.active}
                        changeUserIsActive={setUserActiveHandler}
                        disabled={isChanged()}
                        onSubmit={submitHandler}
                    />
                )}
            </>
        );
    }

    return <span></span>;
};

ProfileUsers.defaultProps = {
    isChanged: false
};
