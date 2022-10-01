import {USER_ROLES} from '../../assets/constants';
import {DBInsert, DBSelect, DBUpdate} from '../db';

export const getAllUsersDBProxy = () =>
    DBSelect('users');

export const getActiveUsersDBProxy = () =>
    DBSelect('users', {active: 1});

export const getUserByEmailDBProxy = (email: string) =>
    DBSelect('users', {email});

export const getAllEducatorsDBProxy = () =>
    DBSelect('users', {role: USER_ROLES.EDUCATOR});

export const getEducatorDBProxy = (id: number) =>
    DBSelect('users', {role: USER_ROLES.EDUCATOR, id});

export const getAllActiveEducatorsDBProxy = () =>
    DBSelect('users', {role: USER_ROLES.EDUCATOR, active: 1});

export const getActiveEducatorDBProxy = (id: number) =>
    DBSelect('users', {role: USER_ROLES.EDUCATOR, active: 1, id});

export const getUserByIdDBProxy = (id: number) =>
    DBSelect('users', {id});

export const getUserByTokenDBProxy = (refresh_token: string) =>
    DBSelect('users', {refresh_token});

export const createUserDBProxy = (email: string, password: string) =>
    DBInsert('users', {email, password});

export const setUserTokenDBProxy = (id: string, refresh_token: string | null) =>
    DBUpdate('users', {refresh_token}, {id});

export const changeUserPasswordDBProxy = (email: string, password: string) =>
    DBUpdate('users', {password}, {email});