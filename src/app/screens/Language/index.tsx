import { Header } from "@components/Header";
import { useState } from "react";
import { ScrollView } from "react-native";

import {
    Container,
    Txt,
    Input,
    Text,
    ButtonConfirm,
    ButtonText,
    TouchableOpacity,
    Image
} from "./styles";
import CheckedBox from "../../../../assets/CheckedBox.png";
import UncheckedBox from "../../../../assets/UncheckedBox.png";

const languages = [
    "Português (Brasil)",
    "English",
    "Español",
    "Français",
    "Italiano",
    "Deutsch",
    "Português (Portugal)",
    "中国人",
    "Nederlands",
    "Afrikaans",
    "Dansk",
    "日本語"
];

export default function Language({ navigation }: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const handleSearch = (text: string) => {
        setSearchTerm(text);
    };

    const handleLanguageSelect = (language: any) => {
        setSelectedLanguage((prev) => (prev === language ? null : language));
    };

    const confirmLanguageSelection = () => {
        console.log(selectedLanguage);
    };

    const filteredLanguages = languages.filter((language) =>
        language.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const LanguageCheckBox = ({ isSelected, onPress, label }: any) => (
        <TouchableOpacity onPress={onPress}>
            <Text>{label}</Text>
            <Image source={isSelected ? CheckedBox : UncheckedBox} />
        </TouchableOpacity>
    );

    return (
        <Container>
            <Header text="Idioma" isBackPress />
            <Txt>Selecione o idioma que deseja para o aplicativo:</Txt>
            <Input
                placeholder="Pesquisar..."
                onChangeText={handleSearch}
                value={searchTerm}
            />
            <ScrollView style={{ maxHeight: 370 }}>
                {filteredLanguages.map((language) => (
                    <LanguageCheckBox
                        key={language}
                        isSelected={language === selectedLanguage}
                        onPress={() => handleLanguageSelect(language)}
                        label={language}
                    />
                ))}
            </ScrollView>
            {selectedLanguage && (
                <ButtonConfirm onPress={confirmLanguageSelection}>
                    <ButtonText>Confirmar</ButtonText>
                </ButtonConfirm>
            )}
        </Container>
    );
}
