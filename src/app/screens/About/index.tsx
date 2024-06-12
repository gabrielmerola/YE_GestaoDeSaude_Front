import { Header } from "@components/Header";
import { FlatList } from "native-base";
import { View } from "react-native";

import {
    Container, FlatListContainer,
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
        { key: "item1", text: "Colocar lembretes de suas consultas, tal como um resumo." },
        {
            key: "item2",
            text: "Definir os horários de suas medicações com apenas quatro informações."
        },
        {
            key: "item3",
            text: "Organizar os resultados de seus exames, bem como armazenar uma cópia deles e muito mais!"
        }
    ];

    return (
        <>
            <Header text="YE GESTÃO SAÚDE" isBackPress />
            <View style={{ alignItems: "center" }}>
                <Container>
                    <SecTxtCont>
                        <Txt adjustsFontSizeToFit={true}>
                            Nós somos o Minha Saúde em Dia, um aplicativo
                            desenvolvido para melhorar a gestão da sua própria saúde
                            e melhorar sua qualidade de vida.
                        </Txt>
                    </SecTxtCont>



                    <FlatListContainer>
                        <SecTxt>Nele você pode:</SecTxt>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <SubTxt adjustsFontSizeToFit={true}>
                                    {"\u2022"} {item.text}
                                </SubTxt>
                            )}
                            scrollEnabled={false}
                        />
                    </FlatListContainer>

                    <SecTxtCont>
                        <ThirdTxt>Sua saúde em suas mãos!</ThirdTxt>
                        <Logon source={Logo} />
                    </SecTxtCont>

                </Container>
            </View>
        </>
    );
}
