import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Container, Separator } from "@components/Table/styles";
import { useState } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PopUp from "src/app/components/PopUp";

import { Cell, CellText, DataCell, HeaderCell, Txt } from "./styles";

export default function () {
    const [showPopUp, setShowPopUp] = useState(false);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    const handlePost = (date: string, measure: string) => {};

    return (
        <>
            <Header text="IMC" isBackPress />

            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View>
                    <View>
                        <Txt>IMC mais recente</Txt>
                    </View>
                    <HeaderCell>
                        <CellText type="gray">Data:10/02/2024</CellText>
                    </HeaderCell>
                    <Separator />
                    <Container>
                        <Cell type="gray">
                            <CellText type="gray">Peso</CellText>
                        </Cell>
                        <Cell type="green">
                            <CellText type="green">Altura</CellText>
                        </Cell>
                        <Cell type="gray">
                            <CellText
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                type="gray"
                            >
                                Normal
                            </CellText>
                        </Cell>
                    </Container>

                    <Container>
                        <DataCell type="gray" radiusPosition="right">
                            <CellText type="gray">100</CellText>
                        </DataCell>
                        <DataCell type="green">
                            <CellText type="green">1,76 m</CellText>
                        </DataCell>
                        <DataCell type="gray" radiusPosition="left">
                            <CellText
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                type="gray"
                            >
                                32,3 - Obesidade
                            </CellText>
                        </DataCell>
                    </Container>

                    <View>
                        <Txt>Pesquisar IMC</Txt>
                    </View>

                    <HeaderCell>
                        <RNPickerSelect
                            style={{ inputAndroid: { width: "50%" } }}
                            placeholder={{
                                label: "Selecione a Data",
                                value: null
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: "09/01/2024", value: "09/01/2024" },
                                { label: "09/01/2024", value: "09/01/2024" },
                                { label: "09/01/2024", value: "09/01/2024" },
                                { label: "09/01/2024", value: "09/01/2024" },
                                { label: "09/01/2024", value: "09/01/2024" }
                            ]}
                        />
                    </HeaderCell>
                    <Separator />
                    <Container>
                        <Cell type="gray">
                            <CellText type="gray">Peso</CellText>
                        </Cell>
                        <Cell type="green">
                            <CellText type="green">Altura</CellText>
                        </Cell>
                        <Cell type="gray">
                            <CellText
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                type="gray"
                            >
                                Normal
                            </CellText>
                        </Cell>
                    </Container>

                    <Container>
                        <DataCell type="gray" radiusPosition="right">
                            <CellText type="gray">100</CellText>
                        </DataCell>
                        <DataCell type="green">
                            <CellText type="green">1,76 m</CellText>
                        </DataCell>
                        <DataCell type="gray" radiusPosition="left">
                            <CellText
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                type="gray"
                            >
                                32,3 - Obesidade
                            </CellText>
                        </DataCell>
                    </Container>
                </View>

                <PopUpAddButton onOpen={handleOpenPopUp} />
            </View>

            {showPopUp ? (
                <PopUp onClose={handleClosePopUp} onPost={handlePost} />
            ) : (
                <></>
            )}
        </>
    );
}
