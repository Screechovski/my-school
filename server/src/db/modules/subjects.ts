import {Connection, MysqlError} from "mysql";
import {ViewSubjectModel} from "../../models/subjects/ViewSubjectModel";

export const getAllSubjects = (connection: Connection) => (): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `subjects`',
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(
                        result.map((subject: ViewSubjectModel) => ({
                            id: subject.id,
                            image: subject.image,
                            title: subject.title
                        }))
                    );
                }
            }
        );
    });

export const getSubject = (connection: Connection) => (id: number): Promise<null | Object[] | MysqlError> =>
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM `subjects` WHERE id = ?',
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