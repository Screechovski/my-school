import { generateDate, manPhoto, messages, names } from './items';

export const generateReviews = (count) => {
    let reviews = [];

    for (let i = 0; i < count; i++) {
        reviews[i] = {
            id: i + 1,
            image: manPhoto,
            message: messages[i],
            createAt: generateDate(),
            name: names[i]
        }
    }

    return reviews;
}

export const generateReview = id => ({
    id,
    image: manPhoto,
    message: messages[id],
    createAt: generateDate(),
    name: names[id]
})

