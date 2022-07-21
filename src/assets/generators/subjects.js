import { subjects } from "./items";

export const generateSubjects = () => subjects;

export const generateSubject = (value) => subjects.find(({ id }) => id === value);