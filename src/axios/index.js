import axios from 'axios';

export const baseURL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL
});

axiosInstance.interceptors.response.use(async (response) => {
    if (response.status >= 200 && response.status <= 204) {
        return await response.data;
    } else if (response.status === 404) {
        throw '404 not found';
    }
});

export default axiosInstance;
