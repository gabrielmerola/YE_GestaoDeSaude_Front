import { Image, Text, Box, Checkbox, ScrollView } from 'native-base'
import { useState } from "react";
import Logo from '../../../assets/Header.png'
import { Buton } from '@components/Button/Button';
import { InputField } from '@components/InputField/InputField';
import { Title } from '@components/Title/Title';
import { sections } from '../../utils/registerInputText';

export default function Register() {
    const [numberSection, setNumSection] = useState(0);

    function advanceSection() {
        if (numberSection < sections.length - 1) {
            setNumSection(numberSection + 1);
        }
    }

  function backSection() {
    if (numberSection > 0) {
      setNumSection(numberSection - 1)
    }
  }

    return (
        <ScrollView flex={1} p={5}>
            <Image source={Logo} alt="Logo Voll" alignSelf="center" />

            <Title color="green.500">{sections[numberSection].title}</Title>
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
                <Text
                    color="green.500"
                    fontWeight="bold"
                    fontSize="md"
                    mt={2}
                    mb={2}
                >
                    {sections[numberSection].subTitle}
                </Text>
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
                    {" "}
                    Voltar
                </Buton>
            )}

            <Buton onPress={() => advanceSection()} mt={4} mb={20}>
                {" "}
                Avançar
            </Buton>
        </ScrollView>
    );
}
