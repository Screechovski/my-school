import {DBSelect} from '../db';

export const getAllEventsDBProxy = () =>
    DBSelect('events');

export const getEventDBProxy = (id: number) =>
    DBSelect('events', {id});
