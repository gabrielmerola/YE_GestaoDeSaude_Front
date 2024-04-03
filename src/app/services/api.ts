import axios from "axios";

const api = axios.create({
    baseURL: "http://gmerola.com.br/ye-gestao/api"
});

export { api };
