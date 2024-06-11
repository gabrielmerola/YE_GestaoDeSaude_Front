import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Container, Separator } from "@components/Table/styles";
import { ImcContext, ImcRecord } from "@context/imc_context";
import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import RNPickerSelect, { Item } from "react-native-picker-select";
import PopUp from "src/app/components/PopUp";

import {
    Cell,
    CellText,
    DataCell,
    HeaderCell,
    HeaderCellText,
    Txt
} from "./styles";
import theme from "../../theme";

export default function () {
    const [showPopUp, setShowPopUp] = useState(false);
    const [latestImc, setLatestImc] = useState<ImcRecord>();
    const [pickerImc, setPickerImc] = useState<ImcRecord>();
    const [dateItems, setDateItems] = useState<ImcRecord[]>([]);
    const [currentDate, setCurrentDate] = useState<string>();
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingPicker, setIsLoadingPicker] = useState(false);
    const { getLatestImc, postImc, getAllDateImc, getByDateImc } =
        useContext(ImcContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    const loadPickerImc = (date: string) => {
        if (date == null) {
            return;
        }
        setIsLoadingPicker(true);
        setCurrentDate(date);
        const response = getByDateImc(date);
        response.then((json) => {
            if (json === null) {
                return;
            }
            setPickerImc(json);
            setIsLoadingPicker(false);
        });
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
    useEffect(() => {
        const response = getAllDateImc();
        response.then((json: ImcRecord[] | undefined) => {
            if (json === undefined) {
                return;
            }
            setDateItems(json);
            if (json == "") {
                console.log(dateItems);
                setIsEmpty(true);
            }
            setIsLoading(false);
        });
    }, []);

    function items(): Item[] {
        if (dateItems == "") {
            return [];
        }

        return dateItems.map((date: any) => {
            return {
                label: date.date,
                value: date.date
            };
        });
    }

    return (
        <>
            <Header text="IMC" isBackPress />

            {isLoading ? (
                <Loading />
            ) : (
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View>
                        {isEmpty ? (
                            <>
                                <View>
                                    <View>
                                        <Txt>IMC mais recente</Txt>
                                    </View>
                                    <HeaderCell>
                                        <HeaderCellText type="gray">
                                            Nenhum IMC encontrado.
                                        </HeaderCellText>
                                    </HeaderCell>
                                    <Separator />
                                    <Container>
                                        <Cell type="gray">
                                            <CellText type="gray">
                                                Peso
                                            </CellText>
                                        </Cell>
                                        <Cell type="green">
                                            <CellText type="green">
                                                Altura
                                            </CellText>
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
                                        <DataCell
                                            type="gray"
                                            radiusPosition="right"
                                        >
                                            <CellText type="gray">kg</CellText>
                                        </DataCell>
                                        <DataCell type="green">
                                            <CellText type="green">m</CellText>
                                        </DataCell>
                                        <DataCell
                                            type="gray"
                                            radiusPosition="left"
                                        >
                                            <CellText type="gray">-</CellText>
                                        </DataCell>
                                    </Container>
                                </View>
                            </>
                        ) : (
                            <View>
                                <View>
                                    <Txt>IMC mais recente</Txt>
                                </View>
                                <HeaderCell>
                                    <HeaderCellText type="gray">
                                        Data:{" "}
                                        {latestImc == undefined
                                            ? ""
                                            : latestImc.date}
                                    </HeaderCellText>
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
                                    <DataCell
                                        type="gray"
                                        radiusPosition="right"
                                    >
                                        <CellText type="gray">
                                            {latestImc == undefined
                                                ? ""
                                                : latestImc.weight}{" "}
                                            kg
                                        </CellText>
                                    </DataCell>
                                    <DataCell type="green">
                                        <CellText type="green">
                                            {latestImc == undefined
                                                ? ""
                                                : latestImc.height}{" "}
                                            m
                                        </CellText>
                                    </DataCell>
                                    <DataCell type="gray" radiusPosition="left">
                                        <CellText
                                            adjustsFontSizeToFit
                                            numberOfLines={1}
                                            type="gray"
                                        >
                                            {(latestImc == undefined
                                                ? ""
                                                : latestImc.imc) +
                                                " - " +
                                                (latestImc == undefined
                                                    ? ""
                                                    : latestImc.level)}
                                        </CellText>
                                    </DataCell>
                                </Container>
                            </View>
                        )}

                        <View>
                            <Txt>Pesquisar IMC</Txt>
                        </View>

                        <HeaderCell>
                            <RNPickerSelect
                                style={{
                                    placeholder: {
                                        color: "black",
                                        fontSize: 18,
                                        fontFamily: theme.FONT_FAMILY.BOLD
                                    }
                                }}
                                placeholder={{
                                    label: "Selecione a Data",
                                    value: null
                                }}
                                onValueChange={(value: string) =>
                                    loadPickerImc(value)
                                }
                                items={items()}
                                value={currentDate}
                            />
                        </HeaderCell>
                        <Separator />
                        {isLoadingPicker ? (
                            <Loading />
                        ) : (
                            <View>
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
                                    <DataCell
                                        type="gray"
                                        radiusPosition="right"
                                    >
                                        <CellText type="gray">
                                            {pickerImc == undefined
                                                ? ""
                                                : pickerImc.weight}{" "}
                                            kg
                                        </CellText>
                                    </DataCell>
                                    <DataCell type="green">
                                        <CellText type="green">
                                            {pickerImc == undefined
                                                ? ""
                                                : pickerImc.height}{" "}
                                            m
                                        </CellText>
                                    </DataCell>
                                    <DataCell type="gray" radiusPosition="left">
                                        <CellText
                                            adjustsFontSizeToFit
                                            numberOfLines={1}
                                            type="gray"
                                        >
                                            {(pickerImc == undefined
                                                ? ""
                                                : pickerImc.imc) +
                                                " - " +
                                                (pickerImc == undefined
                                                    ? ""
                                                    : pickerImc.level)}
                                        </CellText>
                                    </DataCell>
                                </Container>
                            </View>
                        )}
                    </View>

                    <PopUpAddButton onOpen={handleOpenPopUp} />
                </View>
            )}

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
