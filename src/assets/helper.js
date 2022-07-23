import { generatePost, generatePosts } from "./generators/posts";
import { generateReview, generateReviews } from "./generators/reviews";
import {generateEvent, generateEvents} from "./generators/events";
import {generateSubject, generateSubjects} from "./generators/subjects";
import { generateEducator, generateEducators } from "./generators/educators";

const errorChanse = 0.1;

export const hasInArray = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (+(arr[i]) === +(item)) {
            return true;
        }
    }
    return false;
}

export const getRandomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}

const randomDelay = () => {
    return getRandomBetween(1, 1000);
}
const getIdAfter = (url, path) => {
    const pathLength = path.length;
    const rStart = url.indexOf(path);
    const id = url.substring(rStart + pathLength, rStart + pathLength + 2).replace("/", "");

    return +id;
}
const include = (url, path) => url.indexOf(path) !== -1;
const route = (data, resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > errorChanse) {
            resolve({
                status: "SUCCESS",
                data,
            })
        } else {
            reject({
                status: "ERROR",
                data: null,
                error: "Unknown error"
            })
        }
    }, randomDelay())
}

export const myFetch = (url) => new Promise((resolve, reject) => {
    if (include(url, "/reviews/")) {
    const id = getIdAfter(url, "/reviews/");

    route(generateReview(id), resolve, reject);
    } else if (include(url, "/reviews")) {
        route(generateReviews(20), resolve, reject);
    } else if (include(url, "/news/")) {
        const id = getIdAfter(url, "/news/")

        route(generatePost(id), resolve, reject);
    } else if (include(url, "/news")) {
        route(generatePosts(20), resolve, reject);
    } else if (include(url, "/events/")) {
        const id = getIdAfter(url, "/events/");

        route(generateEvent(id), resolve, reject);
    } else if (include(url, "/events")) {
        route(generateEvents(20), resolve, reject);
    } else if (include(url, "/subjects/")) {
        const id = getIdAfter(url, "/subjects/");

        route(generateSubject(id), resolve, reject);
    } else if (include(url, "/subjects")) {
        route(generateSubjects(), resolve, reject);
    } else if (include(url, "/educators/")) {
        const id = getIdAfter(url, "/educators/");

        route(generateEducator(id), resolve, reject);
    } else if (include(url, "/educators")) {
        route(generateEducators(), resolve, reject);
    } else {
        setTimeout(() => reject({
            status: "ERROR",
            data: null,
            error: "404 error"
        }), randomDelay())
    }
})

export const serverLog = (...text) => console.log("SERVER: ", ...text)
export const clientLog = (...text) => console.log("CLIENT: ", ...text)
export const getNumberArray = (length) => {
    const res = [];
    for (let i = length; i > 0; i--) {
        res.push(i);
    }
    return res;
}