import axios from 'axios';
import {store} from "../store/index";
import {addAlert} from "../store/alerts/alertsSlice";

export const instance = axios.create({
    baseURL: location.origin + '/api/',
    timeout: 1000
});

instance.interceptors.response.use(
    (response) => {
        if (response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        store.dispatch(addAlert({
            type: 'error',
            message: error.response.data.message
        }))
        return error.response.data;
    }
);
