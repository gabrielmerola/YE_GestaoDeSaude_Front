import { Image } from "react-native";
import { Title } from "@components/Title/Title";
import { Button, ButtonText, Container, SubTitle, Txt } from "./styles";
import Logo1 from "../../../../assets/logo-verde.png";

export default function Home({ navigation }: any) {
    return (
        <Container>
            <SubTitle>YE Gestão de Saúde</SubTitle>
            <Image source={Logo1} alt="Logo" />
            <Title color="white">Boas-Vindas!</Title>
            <Txt>
                Gerencie sua saúde com facilidade! Use nosso aplicativo para
                conferência de exames, receba resultados em tempo real e
                lembretes personalizados para seus medicamentos!
            </Txt>

            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonText>Login</ButtonText>
            </Button>

            <Button onPress={() => navigation.navigate("Register")}>
                <ButtonText>Cadastro</ButtonText>
            </Button>
        </Container>
    );
}
