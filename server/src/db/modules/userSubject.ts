import {DBSelect} from '../db';

export const getSubjectsByUserDBProxy = (user_id: number) =>
    DBSelect('subject_user', {user_id});

export const getUsersBySubjectDBProxy = (subject_id: number) =>
    DBSelect('subject_user', {subject_id});
