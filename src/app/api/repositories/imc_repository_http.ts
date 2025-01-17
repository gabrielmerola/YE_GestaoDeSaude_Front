import { api } from "@api/http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";

export class ImcRepositoryHttp {
    async getLatestImc() {
        try {
            const token = await AsyncStorage.getItem("token");
            console.log(token);
            const response = await api.get("/imc/latest", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }

    async postNewImc(data: object) {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.post("/imc", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response;
        } catch (error:any) {
            console.log();
            console.log(error);
            return error.response;
        }
    }

    async getByDateImc(date: string) {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.get(`/imc/date/${date}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log();
            console.log(error);
        }
    }

    async getAllDateImc() {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.get("imc/get-date", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log();
            console.log;
        }
    }

    async deleteImc(id: number) {
        try {
            const response = await api.delete(`/imc${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }
}
