import { Card } from "@components/Card";
import { Footer } from "@components/Footer";
import { TouchableOpacity } from "react-native";

import { Container } from "./styles";

export default function Main({ navigation }: any) {
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
                        secDescription="150x100"
                        subDescription="Alta"
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
                        secDescription="85mg/Dl"
                        subDescription="Normal"
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
