import {connection, PromiseType} from '../db';

export const getSubjectsByUserDBProxy = (
    userId: number
): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `subject_user` WHERE user_id = ?',
            [userId],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getUsersBySubjectDBProxy = (
    subjectId: number
): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `subject_user` WHERE subject_id = ?',
            [subjectId],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });
