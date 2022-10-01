import {connection, PromiseType} from '../db';

// TODO переделать на sql query
export const getAllSubjectsWithYearsDBProxy = (): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT subjects.id, subjects.image, subjects.title, subjects.description, subject_year.1, subject_year.2, subject_year.3, subject_year.4, subject_year.5, subject_year.6, subject_year.7, subject_year.8, subject_year.9, subject_year.10, subject_year.11 FROM subjects INNER JOIN subject_year ON subjects.id = subject_year.subject_id;',
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });
