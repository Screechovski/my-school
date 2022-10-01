import mysql, {MysqlError} from 'mysql';
// @ts-ignore
import sql from 'sql-query';

export type PromiseType = null | Object[] | MysqlError;

const sqlQuery = sql.Query();

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mysql',
    password: 'mysql',
    database: 'my_shcool_bd'
});

const DBPromise = (query: string) => new Promise((resolve, reject) => {
    connection.query(query, (error, result) =>
        !!error ? reject(error) : resolve(result)
    );
})

export const DBInsert = (table: string, set: object) => {
    if (!table || !set) throw Error('DBInsert, Some data is undefined');
    const sqlInsert = sqlQuery.insert();
    return DBPromise(sqlInsert.into(table).set(set).build());
}

export const DBUpdate = (table: string, set: object, where: object) => {
    if (!table || !set || !where) throw Error('DBUpdate; Some data is undefined');
    const sqlUpdate = sqlQuery.update();
    return DBPromise(sqlUpdate.into(table).set(set).where(where).build())
}

export const DBSelect = (table: string, where?: object) => {
    if (!table) throw Error('DBSelect; Some data is undefined');
    const sqlSelect = sqlQuery.select();
    return DBPromise(sqlSelect.from(table).where(where).build())
}