import {instance} from './server';

export const getEducators = () => {
    return instance.get('/educators');
};

export const getEducator = (id) => () => {
    return instance.get(`/educators/${id}`);
};

// export const refresh
