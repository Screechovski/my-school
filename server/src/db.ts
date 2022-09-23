import mysql, {Connection, MysqlError} from 'mysql';

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

    // close() {
    //     this.connection.end();
    // }
}

export const DBInstance = new DB();
