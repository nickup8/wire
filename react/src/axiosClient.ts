import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://wire/api/v1",
});

export default axiosClient;
