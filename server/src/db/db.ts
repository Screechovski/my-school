import mysql, {MysqlError} from 'mysql';

export type PromiseType = null | Object[] | MysqlError;

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mysql',
    password: 'mysql',
    database: 'my_shcool_bd'
});

connection.connect();