import { Card } from "@components/Card";
import { Footer } from "@components/Footer";
import { BloodPressureContext } from "@context/blood-pressure-context";
import { GlucoseContext } from "@context/glucose_context";
import { ImcContext } from "@context/imc_context";
import { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Container } from "./styles";

export default function Main({ navigation }: any) {
    const { getBloodPressureLatest } = useContext(BloodPressureContext);
    const [pressure, setPressure] = useState({} as any);

    const { getGlucoseLatest } = useContext(GlucoseContext);
    const [glucose, setGlucose] = useState({} as any);

    const { getLatestImc } = useContext(ImcContext);
    const [imc, setImc] = useState({} as any);

    async function getImc() {
        const response = await getLatestImc();
        setImc(response);
    }

    async function getGlucose() {
        const repsonse = await getGlucoseLatest();
        setGlucose(repsonse);
    }

    async function getPressure() {
        const response = await getBloodPressureLatest();
        setPressure(response);
    }

    useEffect(() => {
        getGlucose();
        getPressure();
        getImc();
    }, []);

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
                        secDescription={pressure.measure}
                        subDescription={pressure.level}
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
                        secDescription={glucose.measure + " mg/dL"}
                        subDescription={glucose.level}
                        color="blue"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("IMC")}>
                    <Card
                        title="Verificação do IMC"
                        description="Verifique seu IMC com base na sua altura e peso"
                        subTitle="Ultima medida"
                        secDescription={imc.imc}
                        subDescription={imc.level}
                        color="green"
                    />
                </TouchableOpacity>
            </Container>
            <Footer navigation={navigation} />
        </>
    );
}
