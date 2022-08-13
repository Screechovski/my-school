import {generatePost, generatePosts} from "./generators/posts";
import {generateReview, generateReviews} from "./generators/reviews";
import {generateEvent, generateEvents} from "./generators/events";
import {generateSubject, generateSubjects} from "./generators/subjects";
import {generateEducator, generateEducators} from "./generators/educators";

const errorChanse = 0.1;

export const hasInArray = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] === +item) {
            return true;
        }
    }
    return false;
};

export const getRandomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};

const randomDelay = () => {
    return getRandomBetween(1, 1000);
};

const getIdAfter = (url, path) => {
    const pathLength = path.length;
    const rStart = url.indexOf(path);
    const id = url
        .substring(rStart + pathLength, rStart + pathLength + 2)
        .replace("/", "");

    return +id;
};

const include = (url, path) => url.indexOf(path) !== -1;

const route = (data, resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > errorChanse) {
            resolve({
                status: "SUCCESS",
                data
            });
        } else {
            reject({
                status: "ERROR",
                data: null,
                error: "Unknown error"
            });
        }
    }, randomDelay());
};

export const myFetch = (url, options = {}) =>
    new Promise((resolve, reject) => {
        if (include(url, "/reviews/")) {
            const id = getIdAfter(url, "/reviews/");

            route(generateReview(id), resolve, reject);
        } else if (include(url, "/reviews")) {
            route(generateReviews(20), resolve, reject);
        } else if (include(url, "/news/")) {
            const id = getIdAfter(url, "/news/");

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
        } else if (include(url, "/create-user")) {
            setTimeout(() => {
                if (hasUser(options.body.email)) {
                    reject({
                        status: "ERROR",
                        data: null,
                        error: "Пользователь с такой почтой уже зарегистрирован"
                    });
                } else {
                    resolve({
                        status: "SUCCESS",
                        data: registerUser(options.body)
                    });
                }
            }, randomDelay());
        } else if (include(url, "/auth")) {
            setTimeout(() => {
                if (!hasUser(options.body.email)) {
                    reject({
                        status: "ERROR",
                        data: null,
                        error: "Пользователь с такой почтой не найден"
                    });
                }

                if (
                    getUser(options.body.email).password ===
                    options.body.password
                ) {
                    authUser(options.body.email);
                    resolve({
                        status: "SUCCESS",
                        data: null
                    });
                } else {
                    reject({
                        status: "ERROR",
                        data: null,
                        error: "Неверный пароль"
                    });
                }
            }, randomDelay());
        } else if (include(url, "/check")) {
            setTimeout(() => {
                const isAuth = isAuthUser();
                if (!!isAuth) {
                    resolve({
                        status: "SUCCESS",
                        data: getUser(isAuth)
                    });
                } else {
                    reject({
                        status: "ERROR",
                        data: null,
                        error: "Необходима авторизация"
                    });
                }
            }, randomDelay());
        } else if (include(url, "/logout")) {
            UnauthUser();
            resolve({
                status: "SUCCESS",
                data: 1
            });
        } else {
            setTimeout(
                () =>
                    reject({
                        status: "ERROR",
                        data: null,
                        error: "404 error"
                    }),
                randomDelay()
            );
        }
    });

export const serverLog = (...text) => console.log("SERVER: ", ...text);
export const clientLog = (...text) => console.log("CLIENT: ", ...text);
export const getNumberArray = (length) => {
    const res = [];
    for (let i = length; i > 0; i--) {
        res.push(i);
    }
    return res;
};
export const isValidEmail = (email) => {
    return Array.isArray(
        String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    );
};

export const fieldsStringify = (fields) => {
    const fieldsArray = Object.values(fields);
    let resultObject = {};

    for (const fieldsArrayElement of fieldsArray) {
        resultObject[fieldsArrayElement.name] = fieldsArrayElement.value;
    }

    return resultObject;
};

export const fieldsIsValid = (fields) => {
    const fieldsArray = Object.values(fields);

    for (const field of fieldsArray) {
        if (!field.isValid && field.isRequired) {
            return false;
        }
    }

    return true;
};

export const copyObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

const hasUser = (email) => {
    return !!localStorage.getItem(`USER::${email}`);
};

const registerUser = (userData) => {
    localStorage.setItem(`USER::${userData.email}`, JSON.stringify(userData));
    return 1;
};

const getUser = (email = null) => {
    if (email) {
        return JSON.parse(localStorage.getItem(`USER::${email}`));
    } else {
        return -1;
    }
};
const authUser = (email = null) => {
    if (email) {
        sessionStorage.setItem("AUTH", email);
    }
};

const isAuthUser = () => {
    return sessionStorage.getItem("AUTH");
};

const UnauthUser = () => {
    return sessionStorage.removeItem("AUTH");
};

export const fieldCreator = ({
    name,
    headline,
    placeholder,
    value,
    isValid,
    isDisabled,
    isRequired,
    isLoading,
    type,
    warningLine,
    attr
}) => {
    return {
        name: name ?? "email",
        headline: headline ?? "Ваш email",
        placeholder: placeholder ?? "Введите ваш email",
        value: value ?? "",
        isValid: isValid ?? null,
        isDisabled: isDisabled ?? false,
        isRequired: isRequired ?? true,
        isLoading: isLoading ?? false,
        type: type ?? "input",
        warningLine: warningLine ?? "",
        attr: attr ?? {}
    };
};

export const emailFieldCreator = () =>
    fieldCreator({
        name: "email",
        headline: "Ваш email",
        placeholder: "Введите ваш email",
        value: "",
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: "input"
    });

class InvalidFieldsClass {
    constructor() {
        this._fields = {};
    }
    add(name, value) {
        if (name in this._fields) {
            this._fields[name] = [value, ...this._fields[name]];
        } else {
            this._fields[name] = [value];
        }
    }
    has(name, value) {
        if (!(name in this._fields)) {
            return false;
        }
        return this._fields[name].includes(value);
    }
}

export const invalidFields = new InvalidFieldsClass();
