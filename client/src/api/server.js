import axios from 'axios';
import {store} from '../store/index';
import {addAlert} from '../store/alerts/alertsSlice';

let ACCESS_TOKEN = 'ASD$@^Y&W@$&U@WQ&';

export const getAccessToken = () => ACCESS_TOKEN;
export const setAccessToken = (val) => (ACCESS_TOKEN = val);

export const instance = axios.create({
    baseURL: location.origin + '/api/',
    timeout: 1000
});

instance.interceptors.response.use(
    (response) => ({
        status: response.status,
        ...response.data
    }),
    (error) => {
        store.dispatch(
            addAlert({
                type: 'error',
                message: `${error.response.data}. Ошибка сервера`
            })
        );
        throw error.response;
    }
);

export const requestWithToken = async (url, options = {}) => {
    let token = getAccessToken();

    if (!('headers' in options)) options.headers = {};

    if (token) options.headers.Authorization = token;

    try {
        const baseQueryResponse = await instance(url, options);
        return baseQueryResponse;
    } catch (error) {
        const checkResponse = await instance.get();
    }
};
