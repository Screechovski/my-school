import {connection, PromiseType} from '../db';

export const getAllSubjectsDBProxy = (): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `subjects`',
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getSubjectDBProxy = (id: number): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `subjects` WHERE id = ?',
            [id],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });
