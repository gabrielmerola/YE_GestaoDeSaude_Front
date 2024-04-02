import { Buton } from "@components/Button";
import { Footer } from "@components/Footer";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VStack, Image, Text, Box, Link, useToast } from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import Logo from "../../../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";

type FormData = {
    email: string;
    password: string;
};

export default function Login({ navigation }: any) {
    const { doLogin } = useAuth();
    const [email, setEmail] = useState(""); //armazena os valores
    const [password, setPassword] = useState("");
    const toast = useToast();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.removeItem("token");
        async function loginVerify() {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                navigation.navigate("StackRoutes");
            }
            setLoading(false);
        }
        loginVerify();
    });

    async function SignIn() {
        const result = await doLogin(email, password);
        console.log(result);
        if (result.status === 200) {
            const { token } = result;
            console.log(token);
            AsyncStorage.setItem("token", token);
            navigation.navigate("StackRoutes");
        } else {
            toast.show({
                title: "Erro no login",
                description: "O email ou senha não conferem",
                backgroundColor: "red.500",
                placement: "top"
            });
        }
    }

    if (loading) {
        return null;
    }

    async function handleSignIn({ email, password }: FormData) {
        await doLogin(email, password);
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
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Footer />
            </TouchableOpacity>
        </>
    );
}
