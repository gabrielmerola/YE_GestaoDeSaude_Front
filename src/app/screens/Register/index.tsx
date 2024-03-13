import { Image, Text, Box, Checkbox, ScrollView } from 'native-base'
import { useState } from "react";
import { Buton } from '@components/Button/Button';
import { InputField } from '@components/InputField/InputField';
import { Title } from '@components/Title/Title';
import { sections } from '../../utils/registerInputText';
import theme from 'src/app/theme';

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
            <Image alt="Logo Voll" alignSelf="center" />

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
                <Text
                    color={theme.COLORS.GREEN_300}
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
