import { generatePost, generatePosts } from "./generators/posts";
import { generateReview, generateReviews } from "./generators/reviews";

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

    return id;
}

const include = (url, path) => url.indexOf(path) !== -1

export const myFetch = (url, options) => new Promise((resolve, reject) => {
    if (include(url, "/reviews")) {
        setTimeout(()=>{
            if (Math.random() > errorChanse) {
                resolve({
                    status: "SUCCESS",
                    data: generateReviews(20),
                })
            } else {
                reject({
                    status: "ERROR",
                    data: null,
                    error: "Unknown error"
                })
            }
        }, randomDelay())
    } else if (include(url, "/review/")) {
        const id = getIdAfter(url, "/review/")

        setTimeout(()=>{
            if (Math.random() > errorChanse) {
                resolve({
                    status: "SUCCESS",
                    data: generateReview(id),
                })
            } else {
                reject({
                    status: "ERROR",
                    data: null,
                    error: "Unknown error"
                })
            }
        }, randomDelay())
    } else if (include(url, "/posts")) {
        setTimeout(()=>{
            if (Math.random() > errorChanse) {
                resolve({
                    status: "SUCCESS",
                    data: generatePosts(20),
                })
            } else {
                reject({
                    status: "ERROR",
                    data: null,
                    error: "Unknown error"
                })
            }
        }, randomDelay())
    } else if (include(url, "/post/")) {
        const id = getIdAfter(url, "/post/")

        setTimeout(()=>{
            if (Math.random() > errorChanse) {
                resolve({
                    status: "SUCCESS",
                    data: generatePost(id),
                })
            } else {
                reject({
                    status: "ERROR",
                    data: null,
                    error: "Unknown error"
                })
            }
        }, randomDelay())
    } else {
        setTimeout(()=>{
            reject({
                status: "ERROR",
                data: null,
                error: "404 error"
            })
        }, randomDelay())
    }
})