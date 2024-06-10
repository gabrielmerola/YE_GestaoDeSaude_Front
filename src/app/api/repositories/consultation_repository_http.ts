import { api } from "@api/http";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ConsultationReponsiveType = {
    expertise: string;
    date: string;
    time: string;
    dateReturn: string;
    description: string;
};

export class ConsultationRepositoryHttp {
    async getAllConsultation() {
        try {
            const token = await AsyncStorage.getItem("token");
            // console.log("token " + token);
            const response = await api.get<ConsultationReponsiveType[]>(
                "/consultation",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error: any) {
            console.log("Error: " + error);
            throw new Error(error);
        }
    }

    async postConsultation(json: object) {
        try {
            const token = await AsyncStorage.getItem("token");
            console.log("token " + token);
            const response = await api.post("/consultation", json, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getConsultationById(id: number) {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.get(`/consultation/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteConsultaionById(id: number) {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await api.delete(`/consultation/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
