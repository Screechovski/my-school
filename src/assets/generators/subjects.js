import {educators, subjects} from "./items";

export const generateSubjects = () =>
    subjects().map(({id, title, imageName, years}) => ({
        id,
        title,
        imageName,
        years
    }));

export const generateSubject = (value) => {
    const result = {
        subject: subjects().find(({id}) => id === value),
        educators: []
    };

    educators().forEach((educator) => {
        if (educator.coursesTaught.includes(value)) {
            result.educators.push(educator);
        }
    });

    return result;
};
