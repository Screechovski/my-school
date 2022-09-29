import {instance} from './server';

export const getNews = () => {
    return instance.get('/news');
};
