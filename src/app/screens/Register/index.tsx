import { Button } from "@components/Button";
import { Footer } from "@components/Footer";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import { sections } from "@utils/registerInputText";
import { Image, Box, ScrollView, useToast, Text, View } from "native-base";
import { useContext, useEffect, useState } from "react";
import MaskInput from "react-native-mask-input";
import { FormDataProps } from "src/app/api/repositories/auth_repository_http";
import { AuthContext } from "src/app/context/auth_context";

import Logo from "../../../../assets/logo.png";

export default function Register({ navigation }: any) {
    const [data, setData] = useState({} as any);
    const toast = useToast();

    const [phoneValue, setPhoneValue] = useState("");
    const [cpfValue, setCpfValue] = useState("");

    const { signUp, signUpError } = useContext(AuthContext);

    function updateData(id: string, value: string) {
        setData({ ...data, [id]: value, phone: phoneValue, cpf: cpfValue });
    }

    async function SignUp() {
        const requiredFields = [
            "email",
            "password",
            "password_confirm",
            "phone",
            "cpf"
        ];
        for (const field of requiredFields) {
            if (!data[field] || data[field].trim() === "") {
                toast.show({
                    title: "Erro ao cadastrar",
                    description: "Por favor, preencha todos os campos",
                    backgroundColor: "red.500",
                    placement: "top"
                });
                return;
            }
        }
        if (data.password !== data.password_confirm) {
            toast.show({
                title: "Erro ao cadastrar",
                description: "Aparentemente as senhas não coincidem",
                backgroundColor: "red.500",
                placement: "top"
            });
            return;
        }

        const response = await signUp(data);
        // console.log("Resposta " + response?.data.message);

        if (response) {
            // console.log(response.data.message);
            console.log(data);
            toast.show({
                title: "Cadastro realizado com sucesso",
                description: "Você já pode fazer login",
                backgroundColor: "green.500",
                placement: "top"
            });
            navigation.replace("Login");
        } else {
            toast.show({
                title: signUpError,
                description: "Verifique os dados e tente novamente",
                backgroundColor: "red.500",
                placement: "top"
            });
        }
    }

    useEffect(() => {
        if (phoneValue) {
            updateData("phone", phoneValue);
        }
    }, [phoneValue]);

    useEffect(() => {
        if (cpfValue) {
            updateData("cpf", cpfValue);
        }
    }, [cpfValue]);

    return (
        <>
            <ScrollView flex={1} p={5} mt={10}>
                <Image
                    source={Logo}
                    alt="Logo"
                    style={{ alignSelf: "center" }}
                />
                <Title>{sections.title}</Title>
                <Box>
                    {sections.inputText?.map((input) => (
                        <InputField
                            label={input.label}
                            placeholder={input.placeholder}
                            key={input.id}
                            secureTextEntry={input.secureTextEntry || false}
                            onChangeText={(text) =>
                                updateData(input.name, text)
                            }
                            value={
                                data[input.name as keyof FormDataProps] || ""
                            }
                        />
                    ))}
                    <View mt={3}>
                        <Text style={{ color: "gray" }} mb={1}>
                            Celular
                        </Text>
                        <MaskInput
                            style={{
                                borderRadius: 8,
                                backgroundColor: "#f5f5f5",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "#d5d5d5",
                                padding: 8,
                                elevation: 4
                            }}
                            value={phoneValue}
                            onChangeText={(masked, unmasked) => {
                                // console.log(masked);
                                setPhoneValue(unmasked);
                            }}
                            mask={[
                                "(",
                                /\d/,
                                /\d/,
                                ")",
                                " ",
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/,
                                "-",
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/
                            ]}
                        />
                    </View>
                    <View mt={3}>
                        <Text mb={1} style={{ color: "gray" }}>
                            CPF
                        </Text>
                        <MaskInput
                            style={{
                                borderRadius: 8,
                                backgroundColor: "#f5f5f5",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "#d5d5d5",
                                padding: 8,
                                elevation: 4
                            }}
                            value={cpfValue}
                            onChangeText={(masked, unmasked) => {
                                // console.log(masked)
                                setCpfValue(unmasked);
                            }}
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                ".",
                                /\d/,
                                /\d/,
                                /\d/,
                                ".",
                                /\d/,
                                /\d/,
                                /\d/,
                                "-",
                                /\d/,
                                /\d/
                            ]}
                        />
                    </View>
                </Box>
                <View mb={10}>
                    <Button onPress={SignUp}>Criar e acessar</Button>
                </View>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
}
