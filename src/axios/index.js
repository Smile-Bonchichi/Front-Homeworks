import axios from 'axios';

export const baseURL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL
});

axiosInstance.interceptors.response.use(async (response) => {
    if (response.status !== 200) {
        alert('Проблема на сервере');
    } else {
        return await response.data;
    }
});

export default axiosInstance;
