import mysql, {Connection, MysqlError} from 'mysql';
import {educators, subjects} from './assets/items';

const bcrypt = require('bcryptjs');

class DB {
    connection: Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'mysql',
            password: 'mysql',
            database: 'my_shcool_bd'
        });
        this.connection.connect();
    }

    getNews = (id: number): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            this.connection.query(
                'SELECT id, title, avatar as image, createdAt as date, message FROM `posts` WHERE id = ' +
                    id,
                (error, result: null | Object[]) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

    getAllNews = (): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            this.connection.query(
                'SELECT id, title, avatar as image, createdAt as date, message FROM `posts`',
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

    test__addEducators = (): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            const subjectsArray = subjects();

            subjectsArray.forEach((subject, index) => {
                this.connection.query(
                    'INSERT INTO `subjects_years` (`subject_id`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [index + 1, ...subject.years.map(p => p ? 1 : 0)],
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }
                );
            });
        });
}

export const DBInstance = new DB();
