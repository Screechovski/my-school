import {instance} from './server';

export const check = () => instance.get('/check');

// export const refresh
