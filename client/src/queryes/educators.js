import {smartFetch} from '../assets/helper';

export const educatorsQuery = () => smartFetch('/educators');

export const educatorQuery = (id) => () => smartFetch('/educator/' + id);
