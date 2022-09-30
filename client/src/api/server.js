import axios from 'axios';
import {Token} from '../assets/helper';

export const instance = axios.create({
    baseURL: location.origin + '/api/',
    timeout: 1000
});

instance.interceptors.response.use(
    (response) => ({
        status: response.status,
        ...response.data
    }),
    (error) => ({
        status: error.response.status,
        errors: [],
        ...error.response.data
    })
);

export const requestWithToken = async (url, options = {}) => {
    let token = Token.get();

    if (!('headers' in options)) options.headers = {};

    if (token) options.headers.Authorization = `Bearer ${token}`;

    const baseQueryResponse = await instance(url, options);

    if (baseQueryResponse.status === 200) {
        return baseQueryResponse;
    }

    if (baseQueryResponse.status !== 401) {
        return baseQueryResponse;
    }

    const refreshResponce = await instance.get('/refresh');

    if (refreshResponce.status === 200) {
        Token.set(refreshResponce.data.accessToken);
        return requestWithToken(url, options);
    }

    return refreshResponce;
};
