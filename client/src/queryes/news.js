import {getNews} from '../api/news';
import {smartFetch} from '../assets/helper';

export const newsQuery = () => getNews();
export const singleNewsQuery = (id) => () => smartFetch('/news/' + id);
