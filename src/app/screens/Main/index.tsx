import { Footer } from "@components/Footer/Footer"
import { Container, Header } from "./styles"
import { TouchableOpacity } from "react-native"
import { Card } from "@components/Card"


export default function Main({ navigation }: any) {
    return (
        <>
            <Header>

            </Header>
            <Container>

                <TouchableOpacity onPress={() => navigation.navigate('Pressure')}>
                    <Card
                        title="Aferições de Pressão"
                        description="Gerencie as suas aferições de pressão"
                        subTitle="Ultima medida"
                        secDescription="150x100"
                        subDescription="Alta"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Glucose')}>
                    <Card
                        title="Aferições de Glicemia"
                        description="Gerencie as suas aferições de glicemia"
                        subTitle="Ultima medida"
                        secDescription="85mg/Dl"
                        subDescription="Normal"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('IMC')}>
                    <Card
                        title="Verificação do IMC"
                        description="Verifique e adicione sua altura e peso para checar o seu IMC "
                        subTitle="Ultima medida"
                        secDescription="31,14"
                        subDescription="Obesidade II"
                    />

                </TouchableOpacity>

            </Container>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Footer />
            </TouchableOpacity>
        </>
    )
}