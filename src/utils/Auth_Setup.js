import axios from 'axios';

const BASE_URL = "";


export const axiosInstance1 = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
        Authorization: null,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const axiosInstanceAuth = axios.create({
    baseURL: BASE_URL_AUTH,
    timeout: 100000,
    headers: {
        Authorization: null,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
});


