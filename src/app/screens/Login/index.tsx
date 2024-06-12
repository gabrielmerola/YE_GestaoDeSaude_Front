

import { Button } from "@components/Button";
import { Footer } from "@components/Footer";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateToken } from "@utils/validation";
import { VStack, Text, Box, Link, useToast, Image } from "native-base";
import { useContext, useEffect, useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { ImageVisability, BoxPassword } from "./styles";
import { AuthContext } from "src/app/context/auth_context";

import Logo from "../../../../assets/logo.png";
import google from "../../../../assets/google.png";

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { login } = useContext(AuthContext);
    const [show, setShow] = useState(false);

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

        const result: any = await login(email, password);
        // console.log("RESULTADO" + result);
        if (result.token) {
            const { token } = result;
            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("userEmail", email);
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
                    <BoxPassword>
                        <InputField
                            label="Senha"
                            placeholder="Insira sua senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordVisible}
                            view
                        />
                    </BoxPassword>
                </Box>

                <Button onPress={SignIn}>Entrar</Button>

                {/* <Link href="" mt={2}>
                    Esqueceu sua senha?
                </Link> */}

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
                <Box alignItems="center">
                    <TouchableOpacity>
                        <Image
                            source={google}
                            alt="Google"
                            height={50}
                            width={50}
                            marginTop={10}
                        />
                    </TouchableOpacity>
                </Box>
            </VStack>
            <Footer navigation={navigation} />
        </>
    );
}
