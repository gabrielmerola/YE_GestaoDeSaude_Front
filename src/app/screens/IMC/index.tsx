import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Container, Separator } from "@components/Table/styles";
import { ImcContext, ImcRecord } from "@context/imc_context";
import { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PopUp from "src/app/components/PopUp";

import { Cell, CellText, DataCell, HeaderCell, Txt } from "./styles";

export default function () {
    const [showPopUp, setShowPopUp] = useState(false);
    const [latestImc, setLatestImc] = useState<ImcRecord>();
    const [pickerImc, setPickerImc] = useState<ImcRecord>();
    const [dateItems, setDateItems] = useState([]);
    const [currentDate, setCurrentDate] = useState();
    const { getLatestImc, postImc, getAllDateImc, getByDateImc } =
        useContext(ImcContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    const loadDates = () => {
        const response = getAllDateImc();
        response.then((json) => {
            if (json === undefined) {
                return;
            }
            setDateItems(json);
        });
    };

    const loadPickerImc = (date: string) => {
        const response = getByDateImc(date);
        response.then((json) => {
            if (json === null) {
                return;
            }
            setPickerImc(json);
        });
    };

    const formatDate = (dateString: Date | string) => {
        const date = new Date(dateString + "T00:00:01");
        const day = date.getDate().toString().padStart(2, "0"); // Get day with leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month with leading zero if needed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handlePost = (list: object) => {
        const response = postImc(list);
        response.then((json) => {
            console.log(json);
        });
    };
    useEffect(() => {
        const response = getLatestImc();

        response.then((data: ImcRecord | null) => {
            if (data === null) {
                return;
            }
            setLatestImc(data);
        });
    }, []);

    return (
        <>
            <Header text="IMC" isBackPress />

            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View>
                    <View>
                        <Txt>IMC mais recente</Txt>
                    </View>
                    <HeaderCell>
                        <CellText type="gray">
                            Data:{" "}
                            {formatDate(
                                latestImc == undefined ? "" : latestImc.date
                            )}
                        </CellText>
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
                            <CellText type="gray">
                                {latestImc == undefined ? "" : latestImc.weight}{" "}
                                kg
                            </CellText>
                        </DataCell>
                        <DataCell type="green">
                            <CellText type="green">
                                {latestImc == undefined ? "" : latestImc.height}{" "}
                                m
                            </CellText>
                        </DataCell>
                        <DataCell type="gray" radiusPosition="left">
                            <CellText
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                type="gray"
                            >
                                {(latestImc == undefined ? "" : latestImc.imc) +
                                    " - " +
                                    (latestImc == undefined
                                        ? ""
                                        : latestImc.level)}
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
                            onValueChange={(value) => setCurrentDate(value)}
                            items={dateItems.map((date: any) => {
                                return {
                                    label: formatDate(date.date),
                                    value: date.date
                                };
                            })}
                            onOpen={loadDates}
                            onClose={() => {
                                loadPickerImc(
                                    currentDate == undefined ? "" : currentDate
                                );
                            }}
                            value={currentDate}
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
                            <CellText type="gray">
                                {pickerImc == undefined ? "" : pickerImc.weight}{" "}
                                kg
                            </CellText>
                        </DataCell>
                        <DataCell type="green">
                            <CellText type="green">
                                {pickerImc == undefined ? "" : pickerImc.height}{" "}
                                m
                            </CellText>
                        </DataCell>
                        <DataCell type="gray" radiusPosition="left">
                            <CellText
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                type="gray"
                            >
                                {(pickerImc == undefined ? "" : pickerImc.imc) +
                                    " - " +
                                    (pickerImc == undefined
                                        ? ""
                                        : pickerImc.level)}
                            </CellText>
                        </DataCell>
                    </Container>
                </View>

                <PopUpAddButton onOpen={handleOpenPopUp} />
            </View>

            {showPopUp ? (
                <PopUp
                    onClose={handleClosePopUp}
                    onPost={handlePost}
                    popUpType="IMC"
                />
            ) : (
                <></>
            )}
        </>
    );
}
