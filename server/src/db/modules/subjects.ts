import {DBSelect} from '../db';

export const getAllSubjectsDBProxy = () =>
    DBSelect('subjects');

export const getSubjectDBProxy = (id: number) =>
    DBSelect('subjects', {id});
