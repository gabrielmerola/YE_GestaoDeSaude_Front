import { api } from "@api/http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";

export class BloodPressureRepositoryHttp {
    async getBloodPressure() {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.get("/blood-pressure", {
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

    async postBloodPressure(data: object) {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.post("/blood-pressure", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            return response.data;
        } catch (error: AxiosError | any) {
            console.log(error);
            //return error.response;
        }
    }

    async deleteBloodPressure(id: number) {
        try {
            const response = await api.delete(`/blood-pressure?id=${id}`, {
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

    async getBloodPressureById(id: number) {
        try {
            const response = await api.get(`/blood-pressure/${id}`, {
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

    async getBloodPressureLatest() {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.get("/blood-pressure/latest", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(response);
            return response.data;
        } catch (error: AxiosError | any) {
            // console.log("ERRO" + error);
            return error.response;
        }
    }
}
