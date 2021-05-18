import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3004/'
});


export const authAPI = {
    me() {
        // @ts-ignore
        return JSON.parse(localStorage.getItem('user'));
    }
};