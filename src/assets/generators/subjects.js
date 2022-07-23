import { subjects } from "./items";

export const generateSubjects = () => subjects.map(({
    id,
    title,
    imageName,
}) => ({
    id,
    title,
    imageName,
}));

export const generateSubject = (value) => subjects.find(({ id }) => id === value);