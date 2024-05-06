import { Card } from "@components/Card";
import { Footer } from "@components/Footer";
import {
    BloodPressureContext,
    PressureType
} from "@context/blood-pressure-context";
import { GlucoseContext, GlucoseType } from "@context/glucose_context";
import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Container } from "./styles";

export default function Main({ navigation }: any) {
    const [glucoseData, setGlucoseData] = useState<GlucoseType | undefined>({
        id: 0,
        date: "",
        measure: "",
        level: ""
    });
    const [pressureData, setPressureData] = useState<PressureType | undefined>({
        id: 0,
        date: "",
        measure: "",
        level: ""
    });
    const { getBloodPressureLatest } = useContext(BloodPressureContext);
    const { getGlucoseLatest } = useContext(GlucoseContext);

    const fetchData = async () => {
        try {
            const glucoseData = await getGlucoseLatest();
            setGlucoseData(glucoseData);
            const pressureData = await getBloodPressureLatest();
            setPressureData(pressureData);
        } catch (error) {
            console.error("Error fetching glucose data:", error);
        }
    };

    fetchData();

    return (
        <>
            <Container>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Pressure")}
                >
                    <Card
                        title="Aferições de Pressão"
                        description="Gerencie as suas aferições de pressão"
                        subTitle="Ultima medida"
                        secDescription={pressureData?.measure}
                        subDescription={pressureData?.level}
                        color="red"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Glucose")}
                >
                    <Card
                        title="Aferições de Glicemia"
                        description="Gerencie as suas aferições de glicemia"
                        subTitle="Ultima medida"
                        secDescription={glucoseData?.measure + " mg/dl"}
                        subDescription={glucoseData?.level}
                        color="blue"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("IMC")}>
                    <Card
                        title="Verificação do IMC"
                        description="Verifique seu IMC com base na sua altura e peso"
                        subTitle="Ultima medida"
                        secDescription="31,14"
                        subDescription="Obesidade II"
                        color="green"
                    />
                </TouchableOpacity>
            </Container>
            <Footer navigation={navigation} />
        </>
    );
}
