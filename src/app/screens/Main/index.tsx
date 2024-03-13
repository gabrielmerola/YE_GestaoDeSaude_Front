import { Footer } from "@components/Footer/Footer";
import { Container } from "./styles";
import { TouchableOpacity } from "react-native";

export default function Main({ navigation }: any) {
    return (
        <>
            <Container></Container>

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Footer />
            </TouchableOpacity>
        </>
    );
}
