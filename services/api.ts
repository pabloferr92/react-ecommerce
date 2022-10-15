import axios, { Axios, AxiosRequestConfig } from "axios";

const api = axios.create({
  url: "",
  baseURL: "http://192.168.0.91:3333/",
  headers: { "Content-type": "application/json" },
});

export default api;
