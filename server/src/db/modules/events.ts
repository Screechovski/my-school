import {connection, PromiseType} from '../db';

export const getAllEventsDBProxy = (): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `events`',
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getEventDBProxy = (id: number): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `events` WHERE id = ?',
            [id],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });
