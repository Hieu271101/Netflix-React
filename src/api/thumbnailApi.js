import axios from "axios";
import axiosClient from "./axiosClient";

const thumbnailApi = {
    async getAll(params) {
        const url = '/thumbnail';
        return await axiosClient.get(url, { params });
    },
    // get(id) {
    //     const url = '/products/${id}';
    //     return axiosClient.get(url);
    // },

};

export default thumbnailApi;