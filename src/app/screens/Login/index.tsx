import { Buton } from "@components/Button";
import { Footer } from "@components/Footer";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VStack, Image, Text, Box, Link, useToast } from "native-base";
import { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "src/app/context/auth_context";

import Logo from "../../../../assets/logo.png";

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState(""); //armazena os valores
    const [password, setPassword] = useState("");
    const toast = useToast();
    const { login } = useContext(AuthContext);

    useEffect(() => {
        AsyncStorage.removeItem("token");
        async function loginVerify() {
            if (await AsyncStorage.getItem("token")) {
                navigation.navigate("StackRoutes");
            }
        }
        loginVerify();
    });

    async function SignIn() {
        const result = await login(email, password);
        console.log(result);
        if (result != undefined) {
            const { token } = result;
            console.log(token);

            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 1);
            const formattedExpirationDate = expirationDate.toISOString();

            await AsyncStorage.setItem(
                "tokenExpiration",
                formattedExpirationDate
            );
            await AsyncStorage.setItem("token", token);

            navigation.navigate("StackRoutes");
            toast.show({
                title: "Login realizado com sucesso",
                description: "Você já pode acessar o app",
                backgroundColor: "green.500",
                placement: "top"
            });
        } else {
            toast.show({
                title: "Erro no login",
                description: "O email ou senha não conferem",
                backgroundColor: "red.500",
                placement: "top"
            });
        }
    }

    return (
        <>
            <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
                <Image source={Logo} alt="Logo" />
                <Title>YE GESTÃO DE SAÚDE</Title>
                <Box>
                    <InputField
                        label="Email"
                        placeholder="Insira seu endereço de e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <InputField
                        label="Senha"
                        placeholder="Insira sua senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </Box>

                <Buton onPress={SignIn}>Entrar</Buton>

                <Link href="" mt={2}>
                    Esqueceu sua senha?
                </Link>

                <Box
                    w="100%"
                    flexDirection="row"
                    justifyContent="center"
                    mt={8}
                >
                    <Text>Ainda não tem cadastro?</Text>{" "}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text color="blue.500">Faça seu cadastro!</Text>
                    </TouchableOpacity>
                </Box>
            </VStack>
            <Footer navigation={navigation} />
        </>
    );
}
