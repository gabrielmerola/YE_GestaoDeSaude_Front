import { ButtonStyled, Container, Txt } from "./styles";

export function Footer({ navigation }: any) {
    return (
        <ButtonStyled onPress={() => navigation.navigate("About")}>
            <Container>
                <Txt>Sobre Nós</Txt>
            </Container>
        </ButtonStyled>
    );
}
