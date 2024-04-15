import axios from "axios";

const api = axios.create({
    baseURL: "http://wwww.gmerola.com.br/ye-gestao/api"
});

export { api };
