import {UserAvatar} from '../../molecules/UserAvatar/UserAvatar';
import {Button} from '../../molecules/Button/Button';
import React, {useState} from 'react';
import css from './ProfileUsers.module.sass';

export const ProfileUserItem = ({
    id,
    image,
    name,
    surname,
    patronymic,
    phone,
    email,
    role,
    active
}) => {
    const [isChanged, setIsChanged] = useState(false);

    const showIsHas = (value) => {
        if (value) return <span>{value}</span>;
        return <span className="text-gray-400"> — </span>;
    };

    return (
        <>
            <div
                className={css.profileUser__inner}
                onClick={() => setIsChanged(!isChanged)}
            >
                <p>Id: {id}</p>
                <UserAvatar src={image} readonly={true} />
                <div>
                    <p>Фамилия: {showIsHas(surname)}</p>
                    <p>Имя: {showIsHas(name)}</p>
                    <p>Отчество: {showIsHas(patronymic)}</p>
                </div>
                <div>
                    <p>Телефон: {showIsHas(phone)}</p>
                    <p>Email: {email}</p>
                </div>
                <div>
                    <p>Роль: {role}</p>
                    <p>Статус аккаунта: {active ? 'Активен' : 'Неактивен'}</p>
                </div>
            </div>
            {isChanged && (
                <>
                    <hr className={css.profileUser__hr} />
                    <Button clickHandler={() => {}} text="Сохранить" />
                </>
            )}
        </>
    );
};