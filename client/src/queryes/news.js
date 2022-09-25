import {smartFetch} from '../assets/helper';

export const newsQuery = () => smartFetch('/news');
export const singleNewsQuery = (id) => () => smartFetch('/news/' + id);
