import { MedicineRespositoryHttp } from "@api/repositories/medicine_repository_http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useState } from "react";

type MedicineContextType = {
    getAllMedicines: () => Promise<[] | undefined>;
    getMedicineByID: (id: number) => Promise<object | undefined>;
    createMedicine: (data: object) => Promise<AxiosResponse | undefined>;
    deleteMedicineByID: (id: number) => Promise<AxiosResponse> | undefined;
    medicineError: string;
    setMedicineError: (error: string) => void;
};
const medicineRepository = new MedicineRespositoryHttp();
const token = AsyncStorage.getItem("token");

const defaultMedicineContext: MedicineContextType = {
    getAllMedicines: async () => {
        return await medicineRepository.getAllMedicines();
    },
    getMedicineByID: async (id: number) => {
        return await medicineRepository.getMedicineByID(id);
    },
    createMedicine: async (data: object) => {
        return await medicineRepository.createMedicine(data);
    },
    deleteMedicineByID: async (id: number) => {
        return await medicineRepository.deleteMedicineByID(id);
    },
    medicineError: "",
    setMedicineError: (error: string) => {}
};

export const MedicineContext = createContext<MedicineContextType>(
    defaultMedicineContext
);

export function MedicineContextProvider({ children }: PropsWithChildren) {
    const [medicineError, setMedicineError] = useState("");

    async function getAllMedicines() {
        try {
            return await medicineRepository.getAllMedicines();
        } catch (error: any) {
            setMedicineError(error.message);
            console.error("Error fetching medicines:", error);
            return undefined;
        }
    }

    async function getMedicineByID(id: number) {
        try {
            return await medicineRepository.getMedicineByID(id);
        } catch (error: any) {
            setMedicineError(error.message);
            console.error(`Error fetching medicine with ID ${id}:`, error);
            return undefined;
        }
    }

    async function createMedicine(data: object) {
        try {
            return await medicineRepository.createMedicine(data);
        } catch (error: any) {
            return error;
        }
    }

    async function deleteMedicineByID(id: number) {
        try {
            return await medicineRepository.deleteMedicineByID(id);
        } catch (error: any) {
            setMedicineError(error.message);
            console.error(`Error deleting medicine with ID ${id}:`, error);
            return undefined;
        }
    }

    return (
        <MedicineContext.Provider
            value={{
                getAllMedicines,
                getMedicineByID,
                createMedicine,
                deleteMedicineByID,
                medicineError,
                setMedicineError
            }}
        >
            {children}
        </MedicineContext.Provider>
    );
}
