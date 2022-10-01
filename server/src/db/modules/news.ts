import {connection, PromiseType} from '../db';

export const getNewsDBProxy = (id: number): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `posts` WHERE id = ?',
            [id],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getAllNewsDBProxy = (): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `posts`',
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const createNewsDBProxy = (
    image: string | null,
    title: string,
    message: string
): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO `posts` (`image`, `title`, `message`) VALUES (?,?,?)',
            [image, title, message],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });
