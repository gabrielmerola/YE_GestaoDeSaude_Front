import { Buton } from "@components/Button";
import { Footer } from "@components/Footer";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import { registerClient } from "@services/clientServices";
import { Image, Box, ScrollView, useToast } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import Logo from "../../../../assets/logo.png";
import { sections } from "../../utils/registerInputText";

export default function Register({ navigation }: any) {
    const [data, setData] = useState({} as any);
    const toast = useToast();

    function updateData(id: string, value: string) {
        setData({ ...data, [id]: value });
    }

    async function SignUp() {
        const response = await registerClient({
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            cpf: data.cpf
        });
        // console.log(response);
        if (response.status === 201) {
            toast.show({
                title: response.message,
                description: "Você já pode fazer login",
                backgroundColor: "green.500",
                placement: "top"
            });
            navigation.replace("Login");
        } else {
            toast.show({
                title: response.message,
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
                    {sections.inputText?.map((input) => {
                        return (
                            <InputField
                                label={input.label}
                                placeholder={input.placeholder}
                                key={input.id}
                                secureTextEntry={input.label.includes("senha")}
                                onChangeText={(text) =>
                                    updateData(input.name, text)
                                }
                                value={data[input.name]}
                            />
                        );
                    })}
                </Box>

                <Buton onPress={() => SignUp()} mt={10}>
                    Criar e acessar
                </Buton>
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Footer />
            </TouchableOpacity>
        </>
    );
}
