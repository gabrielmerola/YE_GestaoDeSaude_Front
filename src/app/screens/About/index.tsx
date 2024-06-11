import { Header } from "@components/Header";
import { FlatList } from "native-base";
import { View } from "react-native";

import {
    Container,
    Logon,
    SecTxt,
    SecTxtCont,
    SubTxt,
    ThirdTxt,
    Txt
} from "./styles";
import Logo from "../../../../assets/logo.png";

export default function About() {
    const data = [
        { key: "item1", text: "Colocar lembretes de suas consultas." },
        { key: "item2", text: "Colocar um resumo delas." },
        {
            key: "item3",
            text: "Definir os horários de suas medicações com apenas quatro informações."
        },
        {
            key: "item4",
            text: "Organizar os resultados de seus exames, bem como armazenar uma cópia deles e muito mais!"
        }
    ];

    const renderItem = ({ item }: any) => (
        <SubTxt>
            {"\u2022"} {item.text}
        </SubTxt>
    );
    return (
        <>
            <Header text="YE GESTÃO SAÚDE" isBackPress />
            <View style={{ alignItems: "center" }}>
                <Container>
                    <Txt>
                        Nós somos o Minha Saúde em Dia, um aplicativo
                        desenvolvido para melhorar a gestão da sua própria saúde
                        e melhorar sua qualidade de vida.
                    </Txt>

                    <SecTxtCont>
                        <SecTxt>Nele você pode:</SecTxt>
                    </SecTxtCont>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <SubTxt>
                                {"\u2022"} {item.text}
                            </SubTxt>
                        )}
                        scrollEnabled={false}
                    />

                    <ThirdTxt>Sua saúde em suas mãos!</ThirdTxt>
                    <Logon source={Logo} />
                </Container>
            </View>
        </>
    );
}
