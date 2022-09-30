import {NUM} from './constants';

export const Token = {
    set(token) {
        localStorage.setItem('accessToken', token);
    },
    get() {
        return localStorage.getItem('accessToken');
    },
    decode(token) {
        return JSON.parse(window.atob(token.split('.')[1]));
    },
    remove() {
        localStorage.removeItem('accessToken');
    }
};

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

export const getNumberArray = (length) => {
    const res = [];
    for (let i = length; i > 0; i--) {
        res.push(i);
    }
    return res;
};

export const Validation = {
    email(email) {
        const isValid = Array.isArray(
            String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        );

        return {
            isValid,
            value: email
        };
    },
    password(password) {
        const cleanValue = password.replace(/[^a-z0-9]/gi, '');
        const isValid =
            password.length >= NUM.password.minLength &&
            password.length <= NUM.password.maxLength;

        return {
            isValid,
            value: cleanValue
        };
    },
    code(code) {
        const cleanValue = code.replace(/[^a-z0-9]/gi, '');
        const isValid = code.length === NUM.code.length;

        return {
            isValid,
            value: cleanValue
        };
    }
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

export const createField = ({
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
        name: name ?? 'email',
        headline: headline ?? 'Ваш email',
        placeholder: placeholder ?? 'Введите ваш email',
        value: value ?? '',
        isValid: isValid ?? null,
        isDisabled: isDisabled ?? false,
        isRequired: isRequired ?? true,
        isLoading: isLoading ?? false,
        type: type ?? 'input',
        warningLine: warningLine ?? '',
        attr: attr ?? {}
    };
};

export const emailFieldCreator = () =>
    createField({
        name: 'email',
        headline: 'Ваш email',
        placeholder: 'Введите ваш email',
        value: '',
        isValid: null,
        isDisabled: false,
        isRequired: true,
        isLoading: false,
        type: 'input'
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

export const prettyBackendDate = (dateString) => {
    const [date, time] = dateString.split('T');
    const [y, mm, d] = date.split('-');
    const [h, m] = time.split(':');

    return `${d}.${mm}.${y} ${h}:${m}`;
};

export const invalidFields = new InvalidFieldsClass();
