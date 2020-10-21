import axios from "axios";

export default axiosInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
});