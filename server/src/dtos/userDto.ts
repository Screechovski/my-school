import {CardUserModel, DBUsersModel, UserSafe} from '../models/trash';

export const userDBToSafe = (user: DBUsersModel): UserSafe => ({
    id: user.id,
    name: user.name,
    surname: user.surname,
    patronymic: user.patronymic,
    role: user.role,
    active: Boolean(user.active),
    phone: user.phone,
    email: user.email,
    image: user.image
});

export const userToCard = (user: DBUsersModel): CardUserModel => {
    let name: string = user.surname as string;

    if (user.name) {
        name += ` ${user.name[0]}.`;
    }
    if (user.patronymic) {
        name += ` ${user.patronymic[0]}.`;
    }

    return {
        id: user.id,
        name,
        email: user.email,
        image: user.image
    };
};
