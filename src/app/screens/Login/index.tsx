import { Button } from "@components/Button";
import { Footer } from "@components/Footer";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateToken } from "@utils/validation";
import { VStack, Image, Text, Box, Link, useToast } from "native-base";
import { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "src/app/context/auth_context";

import Logo from "../../../../assets/logo.png";

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const { login } = useContext(AuthContext);

    useEffect(() => {
        async function loginVerify() {
            // await AsyncStorage.removeItem("token");
            const response = await validateToken();
            if (response) {
                navigation.navigate("StackRoutes");
            }
        }
        loginVerify();
    });

    async function SignIn() {
        if (!email || !password) {
            toast.show({
                title: "Erro no login",
                description: "Por favor, preencha o email e a senha.",
                backgroundColor: "red.500",
                placement: "top"
            });
            return;
        }
        // if (email === "" || password === "") {
        //     toast.show({
        //         title: "Erro no login",
        //         description: "Por favor, preencha o email e a senha.",
        //         backgroundColor: "red.500",
        //         placement: "top"
        //     });
        //     return;
        // }

        // if (email === null && password === null) {
        //     toast.show({
        //         title: "Erro no login",
        //         description: "Por favor, preencha o email e a senha.",
        //         backgroundColor: "red.500",
        //         placement: "top"
        //     });
        //     return;
        // }
        const result: any = await login(email, password);
        // console.log("RESULTADO" + result);
        if (result.token) {
            const { token } = result;
            await AsyncStorage.setItem("token", token);
            // console.log(token);
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

                <Button onPress={SignIn}>Entrar</Button>

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
