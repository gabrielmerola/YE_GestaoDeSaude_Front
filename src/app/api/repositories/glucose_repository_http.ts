import { api } from "@api/http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError, AxiosResponse } from "axios";

export class GlucoseRepositoryHttp {
    async getGlucose() {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.get("/glucose", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: AxiosError | any) {
            console.log(error);
            //return error.response;
        }
    }

    async postGlucose(data: object) {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.post("/glucose", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: AxiosError | any) {
            console.log(error);
            //return error.response;
        }
    }

    async deleteGlucose(id: number) {
        try {
            const response = await api.delete(`/glucose?id=${id}`, {
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

    async getGlucoseById(id: number) {
        try {
            const response = await api.get(`/glucose/${id}`, {
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

    async getGlucoseLatest() {
        try {
            const response = await api.get("/glucose/latest", {
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
