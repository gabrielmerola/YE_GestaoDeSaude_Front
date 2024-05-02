import { Buton } from "@components/Button";
import { Footer } from "@components/Footer";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import { Image, Box, ScrollView, useToast, Text, View } from "native-base";
import { useContext, useState } from "react";
import MaskInput from "react-native-mask-input";
import { FormDataProps } from "src/app/api/repositories/auth_repository_http";
import { AuthContext } from "src/app/context/auth_context";

import Logo from "../../../../assets/logo.png";
import { sections } from "../../utils/registerInputText";

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
        // console.log("senha: "+data.password);
        // console.log("COnfirma: "+data.password_confirm);
        if (data.password !== data.password_confirm) {
            toast.show({
                title: "Erro ao cadastrar",
                description: "Aparentemente as senhas não coincidem",
                backgroundColor: "red.500",
                placement: "top"
            });
            return;
        }
        console.log(data.cpf);

        const response = await signUp(data);
        // console.log("Response: "+JSON.stringify(response));

        if (response !== undefined) {
            toast.show({
                title: response.data.message,
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
                            onChangeText={setPhoneValue}
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
                <Buton onPress={() => SignUp()} mt={10} mb={10}>
                    Criar e acessar
                </Buton>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
}
