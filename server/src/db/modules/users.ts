import {Connection, MysqlError} from 'mysql';
import {ViewUserModel} from '../../models/users/ViewUserModel';

export const getAllUsers = (connection: Connection) => (): Promise<
    null | Object[] | MysqlError
> =>
    new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });

export const getActiveUsers = (connection: Connection) => (): Promise<
    null | Object[] | MysqlError
> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE active = 1',
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });

export const getUserByEmail = (connection: Connection) => (email: string) =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });

export const getAllEducators = (connection: Connection) => (): Promise<
    null | Object[] | MysqlError
> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE role = "teacher" AND active = 1',
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    const shortName = (
                        name: string,
                        surname: string,
                        patronymic: string
                    ) => {
                        return `${surname} ${name[0]}.${patronymic[0]}.`; // TODO исправить если нет отчества
                    };

                    resolve(
                        result.map((educator: ViewUserModel) => ({
                            id: educator.id,
                            image: educator.image,
                            name: shortName(
                                educator.name,
                                educator.surname,
                                educator.patronymic
                            ),
                            email: educator.email
                        }))
                    );
                }
            }
        );
    });

export const getEducator = (connection: Connection) => (
    id: number
): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE role = "teacher" AND active = 1 AND id = ?',
            [id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    const shortName = (
                        name: string,
                        surname: string,
                        patronymic: string
                    ) => {
                        return `${surname} ${name[0]}.${patronymic[0]}.`; // TODO исправить если нет отчества
                    };

                    resolve(
                        result.map((educator: ViewUserModel) => ({
                            id: educator.id,
                            image: educator.image,
                            name: shortName(
                                educator.name,
                                educator.surname,
                                educator.patronymic
                            ),
                            email: educator.email
                        }))
                    );
                }
            }
        );
    });

export const getUserById = (connection: Connection) => (
    id: number
): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE id = ?',
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

export const createUser = (connection: Connection) => (
    email: string,
    password: string
): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO `users` (`email`, `password`) VALUES (?, ?)',
            [email, password],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });

export const setUserToken = (connection: Connection) => (
    userId: string,
    refreshToken: string | null
): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'UPDATE `users` SET `refresh_token` = ? WHERE `users`.`id` = ?',
            [refreshToken, userId],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });

export const getUserByToken = (connection: Connection) => (
    token: string
): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * from `users` WHERE `users`.`refresh_token` = ?',
            [token],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });

export const changeUserPassword = (connection: Connection) => (
    email: string,
    password: string
): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'UPDATE `users` SET `password` = ? WHERE `users`.`email` = ?',
            [password, email],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
