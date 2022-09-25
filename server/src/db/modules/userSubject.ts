import {Connection, MysqlError} from 'mysql';

export const getSubjectsByUser =
    (connection: Connection) =>
    (userId: number): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            connection.query(
                'SELECT * FROM `subject_user` WHERE user_id = ' + userId,
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

export const getUsersBySubject =
    (connection: Connection) =>
    (subjectId: number): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            connection.query(
                'SELECT * FROM `subject_user` WHERE subject_id = ' + subjectId,
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });