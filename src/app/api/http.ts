import axios from "axios";

const api = axios.create({
    baseURL: "https://www.gmerola.com.br/ye-gestao/api"
});

export { api };
