import {instance} from './server';

export const getNews = () => {
    return instance.get('/news');
};

export const getSingleNews = (id) => () => {
    return instance.get(`/news/${id}`);
};
