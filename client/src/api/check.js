import {Token} from '../assets/helper';
import {instance} from './server';

export const check = () =>
    instance.get('/check-token', {
        headers: {
            Authorization: `Bearer ${Token.get()}`
        }
    });
