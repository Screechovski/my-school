import {instance} from './server';

export const getSubjects = () => {
    return instance.get('/subjects');
};

export const getSubject = (id) => () => {
    return instance.get(`/subject/${id}`);
};
