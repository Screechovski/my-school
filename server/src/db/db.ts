import mysql from 'mysql';
import {createNews, getAllNews, getNews} from './modules/news';
import {getAllEvents, getEvent} from './modules/events';
import {getAllSubjects, getSubject} from './modules/subjects';
import {
    changeUserPassword,
    createUser,
    getActiveUsers,
    getAllEducators,
    getAllUsers,
    getEducator,
    getUserByEmail,
    getUserById,
    getUserByToken,
    setUserToken
} from './modules/users';
import {getSubjectsByUser, getUsersBySubject} from './modules/userSubject';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mysql',
    password: 'mysql',
    database: 'my_shcool_bd'
});
connection.connect();

/* news */
export const getNewsDBProxy = getNews(connection);
export const getAllNewsDBProxy = getAllNews(connection);
export const createNewsDBProxy = createNews(connection);
/* events */
export const getEventDBProxy = getEvent(connection);
export const getAllEventsDBProxy = getAllEvents(connection);
/* subject */
export const getSubjectDBProxy = getSubject(connection);
export const getAllSubjectsDBProxy = getAllSubjects(connection);
/* users */
export const getAllUsersDBProxy = getAllUsers(connection);
export const getActiveUsersDBProxy = getActiveUsers(connection);
export const getUserByEmailDBProxy = getUserByEmail(connection);
export const getAllEducatorsDBProxy = getAllEducators(connection);
export const getEducatorDBProxy = getEducator(connection);
export const createUserDBProxy = createUser(connection);
export const setUserTokenDBProxy = setUserToken(connection);
export const getUserByTokenDBProxy = getUserByToken(connection);
export const getUserByIdDBProxy = getUserById(connection);
export const changeUserPasswordDBProxy = changeUserPassword(connection);
/* user_subject */
export const getSubjectsByUserDBProxy = getSubjectsByUser(connection);
export const getUsersBySubjectDBProxy = getUsersBySubject(connection);
