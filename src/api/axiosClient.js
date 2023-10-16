import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:9090/',
    headers: {
        'Content-Type': 'application/json',
    },
});

//Intercepters
//add request intercepter
axiosClient.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// add a response interceptors
axiosClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log('Error response', error.response);

    return Promise.reject(error);
});

const get = async (url, config) => {
    try {
        const response = await axiosClient.get(url, config);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
};

export default axiosClient;

