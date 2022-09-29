import {instance} from './server';

export const getEvents = () => {
    return instance.get('/events');
};
