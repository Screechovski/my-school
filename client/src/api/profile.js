import {instance} from './server';

export const getUsers = () => {
    return instance.get('/profile/users');
};

export const saveUser = (userId, data) => {
    return instance.patch('/profile/user/' + userId, data);
};

export const getSubjects = () => {
    return instance.get('/profile/subjects');
};

export const getEducators = () => {
    return instance.get('/profile/educators');
};
