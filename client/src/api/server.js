import axios from 'axios';
import {Token} from '../assets/helper';

export const instance = axios.create({
    baseURL: location.origin + '/api/',
    timeout: 1000
});

instance.interceptors.request.use((request) => {
    const token = Token.get();

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

instance.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const mainRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isWas
        ) {
            mainRequest._isWas = true;
            try {
                const response = await axios.get('api/refresh');

                Token.set(response.data.data.accessToken);

                return instance.request(mainRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН');
            }
        }
        throw error.data;
    }
);
