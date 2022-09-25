import {smartFetch} from '../assets/helper';

export const subjectsQuery = () => smartFetch('/subjects');
export const subjectQuery = (id) => () => smartFetch('/subject/' + id);
