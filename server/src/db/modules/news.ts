import {Connection, MysqlError} from 'mysql';
import {ViewPostModel} from '../../models/news/ViewPostModel';

export const getNews =
    (connection: Connection) =>
    (id: number): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            connection.query(
                'SELECT * FROM `posts` WHERE id = ?',
                [id],
                (error, result: ViewPostModel[]) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(
                            result.map((news: ViewPostModel) => ({
                                image: news.image,
                                title: news.title,
                                message: news.message,
                                created: news.created
                            }))
                        );
                    }
                }
            );
        });

export const getAllNews =
    (connection: Connection) => (): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `posts`', (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(
                        result.map((news: ViewPostModel) => ({
                            id: news.id,
                            image: news.image,
                            title: news.title,
                            message: news.message,
                            created: news.created,
                            updated: news.updated,
                            moderation: news.moderation
                        }))
                    );
                }
            });
        });

export const createNews =
    (connection: Connection) =>
    (
        image: string | null,
        title: string,
        message: string
    ): Promise<null | Object[] | MysqlError> =>
        new Promise((resolve, reject) => {
            connection.query(
                'INSERT INTO `posts` (`image`, `title`, `message`) VALUES (?,?,?)',
                [image, title, message],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
