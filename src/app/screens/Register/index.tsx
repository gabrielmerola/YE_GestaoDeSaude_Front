import { Image, Box, Checkbox, ScrollView, Text } from "native-base";
import { useState } from "react";
import { Buton } from "@components/Button";
import { InputField } from "@components/InputField";
import { Title } from "@components/Title/Title";
import { sections } from "../../utils/registerInputText";
import { Footer } from "@components/Footer";
import { TouchableOpacity } from "react-native";
import Logo from "../../../../assets/logo.png";

export default function Register({ navigation }: any) {
    const [numberSection, setNumSection] = useState(0);

    function advanceSection() {
        if (numberSection < sections.length - 1) {
            setNumSection(numberSection + 1);
        }
    }

    function backSection() {
        if (numberSection > 0) {
            setNumSection(numberSection - 1);
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

                <Title>{sections[numberSection].title}</Title>
                <Box>
                    {sections[numberSection]?.inputText?.map((input) => {
                        return (
                            <InputField
                                label={input.label}
                                placeholder={input.placeholder}
                                key={input.id}
                            />
                        );
                    })}
                </Box>

                <Box>
                    <Text>{sections[numberSection].subTitle}</Text>
                    {sections[numberSection].checkbox.map((checkbox) => {
                        return (
                            <Checkbox key={checkbox.id} value={checkbox.value}>
                                {checkbox.value}
                            </Checkbox>
                        );
                    })}
                </Box>

                {numberSection > 0 && (
                    <Buton onPress={() => backSection()} bgColor="gray.400">
                        Voltar
                    </Buton>
                )}

                <Buton onPress={() => advanceSection()} mt={4} mb={20}>
                    {numberSection == 2 ? "Finalizar" : "Avancar"}
                </Buton>
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Footer />
            </TouchableOpacity>
        </>
    );
}
