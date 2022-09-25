import {instance} from './server';

export const authorization = (data) => instance.post('/auth', data);