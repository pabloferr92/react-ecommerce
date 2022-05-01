import axios, { Axios, AxiosRequestConfig } from "axios";



const api = axios.create({
    url : "",
    baseURL : "http://localhost:8080/",
    headers: {'Content-type': 'application/json'},
});

export default api;