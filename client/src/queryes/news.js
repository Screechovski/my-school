import {smartFetch} from '../assets/helper';

export const newsQuery = () => smartFetch('/api/news');
export const singleNewsQuery = (id) => () => smartFetch('/api/news/' + id);
