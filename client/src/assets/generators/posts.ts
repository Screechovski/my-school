import { titles, messages, generateDate } from "./items";


export const generatePosts = (count: number) => {
    let posts = [];

    for (let i = 0; i < count; i++) {
        posts.push({
            id: i + 1,
            title: titles()[i],
            image: "null",
            date: generateDate(),
            message: messages()[i]
        })
    }

    return posts;
}

export const generatePost = (id: number) => ({
    id,
    title: titles()[id - 1],
    image: "null",
    date: generateDate(),
    message: messages()[id - 1]
})