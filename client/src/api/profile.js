import {requestWithToken} from './server';

export const getUsers = () => {
    return requestWithToken('/profile/users');
};

export const getSubjects = () => {
    return requestWithToken('/profile/subjects');
};

export const getEducators = () => {
    return requestWithToken('/profile/educators');
};
