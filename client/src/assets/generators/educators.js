import {educators} from './items';
import {generateSubject} from './subjects';

export const generateEducators = () => educators();

export const generateEducator = (value) => {
    const educator = educators().find(({id}) => id === value);
    educator.coursesTaught = educator.coursesTaught.map(
        (subjectId) => generateSubject(subjectId).subject
    );

    return educator;
};