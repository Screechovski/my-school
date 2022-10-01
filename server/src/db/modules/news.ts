import {DBInsert, DBSelect} from '../db';

export const getAllNewsDBProxy = () =>
    DBSelect('posts');

export const getNewsDBProxy = (id: number) =>
    DBSelect('posts', {id});

export const createNewsDBProxy = (image: string | null, title: string, message: string) =>
    DBInsert('posts', {image, title, message});
