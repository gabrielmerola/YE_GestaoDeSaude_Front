import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { formatDate } from "@components/PopUp";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { Separator } from "@components/Table/styles";
import {
    ButtonContainer,
    ConsultationsDataHeader,
    ConsultationsDataHeaderTitle,
    Input,
    ModalContainer,
    ResumeContainer,
    ResumeTxt,
    TableContainer,
    View
} from "@screens/ConsultationsHeld/styles";
import { FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

interface Consultation {
    id: number;
    especialty: string;
    date: string;
    hour: string;
    resume: string;
    return: string;
    reminder: string;
}

const json = [
    {
        id: 1,
        especialty: "Clínico Geral",
        date: "17/02/2023",
        hour: "10:00",
        resume: "Pedidos de exames de sangue",
        return: "6",
        reminder: "15"
    }
];

export default function ConsultationsHeld() {
    const [showAcomplishedConsultations, setShowAcomplishedConsultations] =
        useState(false);
    const [showConsultationsData, setShowConsultationsData] = useState(false);
    const [showNewConsultation, setShowNewConsultation] = useState(false);
    const [data, setData] = useState<Consultation[]>([]);
    const [date, setDate] = useState<string>("");
    const [returnDate, setReturnDate] = useState<string>("");
    const [resumeText, setResumeText] = useState("");

    const handleChangeText = (inputText: string) => {
        const formattedText = inputText.replace(/[\r\n]/g, "");
        setResumeText(formattedText);
    };
    const handleDate = (inputDate: string) => {
        setDate(formatDate(inputDate));
    };

    const handleReturnDate = (inputDate: string) => {
        setReturnDate(formatDate(inputDate));
    };

    useEffect(() => {
        setData(json);
    }, []);

    return (
        <>
            <Header text="Consultas" isBackPress />
            <View>
                <ListInteractableItem
                    text="Clínico Geral"
                    isButton
                    modalFunction={() => setShowAcomplishedConsultations(true)}
                />
                <ListInteractableItem text="Ginecologista" isButton />
                <ButtonContainer>
                    <PopUpAddButton
                        onOpen={() => setShowNewConsultation(true)}
                    />
                </ButtonContainer>
            </View>

            {showAcomplishedConsultations ? (
                <ModalContainer>
                    <Header
                        text="Consultas Realizadas"
                        isModal
                        onModalClose={() =>
                            setShowAcomplishedConsultations(false)
                        }
                    />
                    <View>
                        <ListInteractableItem
                            text="Próxima consulta"
                            text2="17/08/2023"
                            isButton
                        />
                        <ListInteractableItem
                            text="17/02/2023"
                            isButton
                            modalFunction={() => setShowConsultationsData(true)}
                        />
                        <ListInteractableItem text="25/05/2022" isButton />
                        <ListInteractableItem text="04/01/2022" isButton />
                        <ListInteractableItem text="30/09/2020" isButton />
                    </View>
                </ModalContainer>
            ) : (
                <></>
            )}
            {showConsultationsData ? (
                <ModalContainer>
                    <Header
                        text="Dados Consulta"
                        isModal
                        onModalClose={() => setShowConsultationsData(false)}
                    />
                    <TableContainer>
                        <FlatList
                            data={data}
                            keyExtractor={(item) =>
                                "ConsultationsHeld FlatList " +
                                item.id.toString()
                            }
                            renderItem={({ item }: { item: Consultation }) => (
                                <>
                                    <Table
                                        rows={[
                                            {
                                                nome: "Especialidade",
                                                especialty: item.especialty
                                            }
                                        ]}
                                    />
                                    <Table
                                        rows={[
                                            {
                                                nome: "Data",
                                                especialty: item.date
                                            }
                                        ]}
                                    />
                                    <Table
                                        rows={[
                                            {
                                                nome: "Horário",
                                                especialty: item.hour
                                            }
                                        ]}
                                    />
                                    <Table
                                        rows={[
                                            {
                                                nome: "Retorno",
                                                especialty: `${item.return} meses`
                                            }
                                        ]}
                                    />
                                    <Table
                                        rows={[
                                            {
                                                nome: "Lembrete para agendamento",
                                                especialty: `${item.return} dias antes`
                                            }
                                        ]}
                                    />
                                    <Separator />
                                    <ConsultationsDataHeader>
                                        <ConsultationsDataHeaderTitle>
                                            Resumo
                                        </ConsultationsDataHeaderTitle>
                                    </ConsultationsDataHeader>
                                    <Separator />
                                    <ResumeContainer>
                                        <ResumeTxt>{item.resume}</ResumeTxt>
                                    </ResumeContainer>
                                </>
                            )}
                        />
                    </TableContainer>
                </ModalContainer>
            ) : (
                <></>
            )}
            {showNewConsultation ? (
                <ModalContainer>
                    <Header
                        text="Nova Consulta"
                        isModal
                        onModalClose={() => setShowNewConsultation(false)}
                    />
                    <View>
                        <ListInteractableItem
                            text="Especialidade:"
                            isButton={false}
                            inputType="TEXT"
                            inputTxt="Insira a especialidade..."
                            sizeType="SMALL"
                        />
                        <ListInteractableItem
                            text="Data:"
                            isButton={false}
                            inputType="DATE"
                            onChangeText={(text) => handleDate(text)}
                            inputValue={date}
                        />
                        <ListInteractableItem
                            text="Horário:"
                            isButton={false}
                            inputType="TIME"
                            inputTxt="00:00"
                        />
                        <ListInteractableItem
                            text="Retorno:"
                            isButton={false}
                            inputType="DATE"
                            onChangeText={(text) => handleReturnDate(text)}
                            inputValue={returnDate}
                        />
                        <Input
                            placeholder="Insira o resumo da consulta..."
                            onChangeText={handleChangeText}
                            value={resumeText}
                        />
                    </View>
                    <CancelAndSaveButton
                        onPress={() => setShowNewConsultation(false)}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}
        </>
    );
}
