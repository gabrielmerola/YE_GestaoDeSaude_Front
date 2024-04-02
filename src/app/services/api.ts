import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.26:8080"
});

export { api };
