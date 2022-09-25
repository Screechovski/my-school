import {Connection, MysqlError} from 'mysql';

export const getAllEvents =
    (connection: Connection) => (): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `events`', (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

export const getEvent =
    (connection: Connection) =>
    (id: number): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            connection.query(
                'SELECT * FROM `events` WHERE id = ?',
                [id],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });