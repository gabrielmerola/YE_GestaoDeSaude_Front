import { View } from "native-base";
import Logo from "../../../assets/Logo.png";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Title } from "../../components/Title";

export default function Home({ navigation }: any) {
    return (
        <View style={styles.contentContainer}>
            <Image source={Logo} alt="Logo" />
            <Title>Boas-Vindas!</Title>
            <Text style={styles.subTitle}>YE Gestão de Saúde</Text>
            <Text style={styles.text}>
                Gerencie sua saúde com facilidade!Use nosso aplicativo para
                conferência de exames, receba resultados em tempo real e
                lembretes personalizados para seus medicamentos!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Register")}
            >
                <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: "center",
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 120,
        gap: 32,
        backgroundColor: "#D9D9D9",
        flex: 1
    },
    subTitle: {
        color: "#8D8D99",
        fontSize: 32
    },
    text: {
        color: "#127856",
        textAlign: "center",
        fontFamily: "Jomolhari",
        fontSize: 16,
        fontWeight: "400"
    },
    button: {
        borderRadius: 8,
        backgroundColor: "#739489", // Pode ser ajustado conforme necessário
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4, // Adiciona a elevação para sombra no Android
        padding: 10, // Pode ser ajustado conforme necessário
        width: 200,
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600"
    }
});
