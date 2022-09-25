// @ts-ignore
import {generateDate, messages, titles} from "./items.ts";

export const generateEvents = (count: number) => {
    let events = [];

    for (let i = count; i > 0; i--) {
        events.push({
            id: count - i + 1,
            title: titles()[i-1],
            message: messages()[i-1],
            date: generateDate(),
        })
    }

    return events;
}

export const generateEvent = (id: number) => ({
    id,
    title: titles()[19 - id],
    messages: messages()[19 - id],
    date: generateDate(),
})