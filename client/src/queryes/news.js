import {myFetch, smartFetch} from "../assets/helper";

export const newsQuery = () => myFetch('/api/news');
export const singleNewsQuery = (id) => () => myFetch('/api/news/' + id);
