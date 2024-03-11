import { VStack, Image, Text, Box, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "../../../assets/logo_verde.png";
import { Buton } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Title } from "../../components/Title";

export default function Login({ navigation }) {
    return (
        <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
            <Image source={Logo} alt="Logo" w="50%" h="20%" />

            <Title color="green.500">YE GESTÃO DE SAÚDE</Title>
            <Box>
                <InputField
                    label="Email"
                    placeholder="Insira seu endereço de e-mail"
                />
                <InputField
                    label="Senha"
                    placeholder="Insira sua senha"
                    secureTextEntry={true}
                />
            </Box>
            <Buton>Entrar</Buton>

            <Link href="" mt={2}>
                Esqueceu sua senha?
            </Link>

            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                <Text>Ainda não tem cadastro?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text color="blue.500">Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}
