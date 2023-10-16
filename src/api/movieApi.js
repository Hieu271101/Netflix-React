// import axios from "axios";
// import axiosClient from "./axiosClient";

// const movieApi = {
//     async getAll(params) {
//         const url = '/movie';
//         return await axiosClient.get(url, { params });
//     },
//     get(id) {
//         const url = `/movie/${id}`;
//         return axiosClient.get(url);
//     },

// };

// export default movieApi;


import { AxiosRequest } from "./AxiosRequest";
export const MovieApi = {
    getAll() {
        return AxiosRequest.get("/movie");
    },
    remove(id) {
        return AxiosRequest.delete(`movie/${id}`);
    },
    create(data) {
        return AxiosRequest.post("/movie", data);
    },
    edit(data) {
        return AxiosRequest.patch(`/movie/${data._id}`, data);
    },
    getOne(slug) {
        return AxiosRequest.get(`/movies/${slug}`);
    },
    search(key) {
        return AxiosRequest.get(`/searchByMovieName?q=${key}`);
    },
};


export default MovieApi;
