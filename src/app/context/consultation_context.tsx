import {
    ConsultationReponsiveType,
    ConsultationRepositoryHttp
} from "@api/repositories/consultation_repository_http";
import { PropsWithChildren, createContext } from "react";

type ConsultationContextType = {
    getAllConsultation: () => Promise<ConsultationReponsiveType[] | undefined>;
    postConsultation: (json: object) => Promise<object | undefined>;
    getConsultationById: (id: number) => Promise<object | undefined>;
    deleteConsultationById: (id: number) => Promise<object | undefined>;
};

const defaultConsultationContext: ConsultationContextType = {
    getAllConsultation: async () => {
        return [];
    },

    postConsultation: async (_json: object) => {
        return {};
    },

    getConsultationById: async (id: number) => {
        return {};
    },

    deleteConsultationById: async (id: number) => {
        return {};
    }
};

export const ConsultationContext = createContext<ConsultationContextType>(
    defaultConsultationContext
);

export function ConsultationContextProvider({ children }: PropsWithChildren) {
    const consultationRepository = new ConsultationRepositoryHttp();
    async function getAllConsultation() {
        try {
            const response = consultationRepository.getAllConsultation();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async function postConsultation(json: object) {
        try {
            const response = consultationRepository.postConsultation(json);
            return response;
        } catch (error: any) {
            console.log(error);
            return error;
        }
    }

    async function getConsultationById(id: number) {
        try {
            const response = consultationRepository.getConsultationById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteConsultationById(id: number) {
        try {
            const response = consultationRepository.deleteConsultaionById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ConsultationContext.Provider
            value={{
                getAllConsultation,
                postConsultation,
                getConsultationById,
                deleteConsultationById
            }}
        >
            {children}
        </ConsultationContext.Provider>
    );
}
