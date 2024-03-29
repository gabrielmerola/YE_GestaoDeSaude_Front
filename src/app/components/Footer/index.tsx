import { TouchableOpacity } from "react-native";

import { Container, Txt } from "./styles";

export function Footer({ navigation }: any) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Container>
                <Txt>Sobre Nós</Txt>
            </Container>
        </TouchableOpacity>
    );
}
