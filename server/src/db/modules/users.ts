import {MysqlError} from 'mysql';
import {DBUsersModel} from '../../models/trash';
import {connection} from '../db';

type PromiseType = DBUsersModel[] | MysqlError | null;

export const getAllUsersDBProxy = (): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (error, result) =>
            !!error ? reject(error) : resolve(result)
        );
    });

export const getActiveUsersDBProxy = (): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE active = 1',
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getUserByEmailDBProxy = (email: string): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getAllEducatorsDBProxy = (): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE role = "educator" AND active = 1',
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getEducatorDBProxy = (id: number): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE role = "educator" AND active = 1 AND id = ?',
            [id],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getUserByIdDBProxy = (id: number): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM users WHERE id = ?',
            [id],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const createUserDBProxy = (
    email: string,
    password: string
): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO `users` (`email`, `password`) VALUES (?, ?)',
            [email, password],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const setUserTokenDBProxy = (
    userId: string,
    refreshToken: string | null
): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'UPDATE `users` SET `refresh_token` = ? WHERE `users`.`id` = ?',
            [refreshToken, userId],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const getUserByTokenDBProxy = (token: string): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * from `users` WHERE `users`.`refresh_token` = ?',
            [token],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });

export const changeUserPasswordDBProxy = (
    email: string,
    password: string
): Promise<PromiseType> =>
    new Promise((resolve, reject) => {
        connection.query(
            'UPDATE `users` SET `password` = ? WHERE `users`.`email` = ?',
            [password, email],
            (error, result) => (!!error ? reject(error) : resolve(result))
        );
    });
