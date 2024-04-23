import axios from "axios";

const api = axios.create({
    baseURL: "http://10.1.1.35:8081"
});

export { api };
