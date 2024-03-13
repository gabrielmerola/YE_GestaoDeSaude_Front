import { Footer } from "@components/Footer/Footer"
import { Container, Header } from "./styles"
import { TouchableOpacity } from "react-native"
import { Card } from "@components/Card"


export default function Main({ navigation }: any) {
    return (
        <Container>
            <Header>

            </Header>

            <TouchableOpacity onPress={() => navigation.navigate('Pressure')}>
                <Card
                    title="Aferições de Pressão"
                    description="Gerencie as suas aferições de pressão"
                    subTitle="Ultima medida"
                    secDescription="150x100"
                    subDescription="Alta"
                />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Footer />
            </TouchableOpacity>
        </Container>
    )
}