import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { Separator } from "@components/Table/styles";
import { ConsultationContext } from "@context/consultation_context";
import { useFocusEffect } from "@react-navigation/native";
import {
    ButtonContainer,
    ConsultationsDataHeader,
    ConsultationsDataHeaderTitle,
    Input,
    ModalContainer,
    ResumeContainer,
    ResumeTxt,
    TableContainer,
    ViewContainer
} from "@screens/ConsultationsHeld/styles";
import { FlatList } from "native-base";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaskInput from "react-native-mask-input";
import ListInteractableItem from "src/app/components/ListInteractableItem";
import { ConsultationReponsiveType } from "@api/repositories/consultation_repository_http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";

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

export default function ConsultationsHeld({ navigation }: any) {
    const [showAcomplishedConsultations, setShowAcomplishedConsultations] =
        useState(false);
    const { getAllConsultation, getConsultationById, postConsultation } =
        useContext(ConsultationContext);
    const [showConsultationsData, setShowConsultationsData] = useState(false);
    const [showNewConsultation, setShowNewConsultation] = useState(false);
    const [data, setData] = useState<Consultation[]>([]);
    const [returnDate, setReturnDate] = useState<string>("");
    const [resumeText, setResumeText] = useState("");
    const [getAllConst, setGetAllConst] = useState<ConsultationReponsiveType[]>(
        []
    );
    const [showNewMedicines, setShowNewMedicines] = useState(false);
    const [getByIdConst, setGetByIdConst] = useState<any>({});
    const [postConst, setPostConst] = useState<any>({});

    const [date, setDate] = useState("");

    const handleChangeText = (inputText: string) => {
        const formattedText = inputText.replace(/[\r\n]/g, "");
        setResumeText(formattedText);
    };

    async function getAll() {
        const response: any = await getAllConsultation();
        // console.log("response", response);
        if (response == "") {
            setGetAllConst([]);
        } else {
            setGetAllConst(response);
        }
    }

    // const fetchConsultations = async () => {
    //     try {
    //         const response = await getAllConsultation();
    //         if (response && Array.isArray(response)) {
    //             const parsedConsultations = response.map((med: any) => ({
    //                 id: data.id,
    //                 especialty: data.especialty,
    //                 date: data.date,
    //                 hour: data.hour,
    //                 resume: data.resume,
    //                 return: data.return,
    //                 reminder: data.reminder,
    //             }));
    //             setGetAllConst(parsedConsultations);
    //         }
    //     } catch (error: AxiosError | any) {
    //         return console.log(
    //             "Erro ao buscar medicamentos: " + error.response
    //         );
    //     }
    // };

    async function getById(id: number) {
        const response = await getConsultationById(id);
        if (response !== undefined) {
            setGetByIdConst(response);
            setShowConsultationsData(true);
        }
    }

    async function post() {
        if(postConst.expertise === "" || date === "" || postConst.time === "" || returnDate === "" || postConst.description === "") {
            return alert("Preencha todos os campos!");
        }

        formatJson("name", postConst.expertise);
        console.log(postConst.expertise);
        const formattedDate = date.split("/").reverse().join("-");
        const formattedDateReturn = returnDate.split("/").reverse().join("-");
        formatJson("dateReturn", formattedDateReturn);
        formatJson("date", formattedDate);
        console.log(postConst);
        
        await postConsultation(postConst).then((response: any) => {
            if(response.status !== 201){
                return alert("Erro ao criar consulta!");
            } else {
                alert("Consulta criada com sucesso!");
                setReturnDate("");
                setDate("");
                setTimeout(() => {
                    setShowNewConsultation(false);
                    getAll();
                }, 3000);
            }
        })
        
    }

    function formatJson(id: string, value: any) {
        setPostConst((prevState: any) => ({
            ...prevState,
            [id]: value
        }));
    }

    useFocusEffect(
        useCallback(() => {
            getAll();
            setData(json);
        }, [])
    );

    return (
        <>
            <Header text="Consultas" isBackPress />
            <ViewContainer>
                {getAllConst.map((item: any, index) => {
                    return (
                        <ListInteractableItem
                            key={"ConsultationListKey " + index}
                            text={item.name}
                            isButton
                            modalFunction={() => getById(item.id)}
                        />
                    );
                })}
                <ButtonContainer>
                    <PopUpAddButton
                        onOpen={() => setShowNewConsultation(true)}
                    />
                </ButtonContainer>
            </ViewContainer>

            {showAcomplishedConsultations ? (
                <ModalContainer>
                    <Header
                        text="Consultas Realizadas"
                        isModal
                        onModalClose={() =>
                            setShowAcomplishedConsultations(false)
                        }
                    />
                    <ViewContainer>
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
                    </ViewContainer>
                </ModalContainer>
            ) : (
                <></>
            )}
            {showConsultationsData ? (
                <ModalContainer>
                    <Header
                        text="Dados da Consulta"
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
                            renderItem={({ item }: { item: any }) => (
                                <>
                                    <Table
                                        rows={[
                                            {
                                                nome: "Especialidade",
                                                especialty: getByIdConst.name
                                            }
                                        ]}
                                    />
                                    <Table
                                        rows={[
                                            {
                                                nome: "Data",
                                                especialty: getByIdConst.date
                                            }
                                        ]}
                                    />
                                    <Table
                                        rows={[
                                            {
                                                nome: "Horário",
                                                especialty: getByIdConst.hour
                                            }
                                        ]}
                                    />
                                    <Table
                                        rows={[
                                            {
                                                nome: "Retorno",
                                                especialty:
                                                    getByIdConst.dateReturn
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
                                        <ResumeTxt>
                                            {getByIdConst.description}
                                        </ResumeTxt>
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
                    <ViewContainer>
                        <ListInteractableItem
                            text="Especialidade:"
                            isButton={false}
                            inputType="TEXT"
                            inputTxt="Insira a especialidade..."
                            onChangeText={(text) => {
                                formatJson("expertise", text);
                            }}
                            sizeType="SMALL"
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 8,
                                marginTop: 8
                            }}
                        >
                            <Text>Data:</Text>
                            <MaskInput
                                value={date}
                                style={{
                                    width: "40%",
                                    borderRadius: 8,
                                    backgroundColor: "#f5f5f5",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "#d5d5d5",
                                    padding: 4,
                                    elevation: 4,
                                    marginTop: 8,
                                    fontSize: 16
                                }}
                                onChangeText={(masked) => {
                                    setDate(masked);
                                }}
                                mask={[
                                    /\d/,
                                    /\d/,
                                    "/",
                                    /\d/,
                                    /\d/,
                                    "/",
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/
                                ]}
                            />
                        </View>
                        <ListInteractableItem
                            text="Horário:"
                            isButton={false}
                            inputType="TIME"
                            inputTxt="00:00"
                            onChangeText={(text) => formatJson("time", text)}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 8,
                                marginTop: 8
                            }}
                        >
                            <Text>Data de Retorno:</Text>
                            <MaskInput
                                value={returnDate}
                                style={{
                                    width: "40%",
                                    borderRadius: 8,
                                    backgroundColor: "#f5f5f5",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "#d5d5d5",
                                    padding: 4,
                                    elevation: 4
                                }}
                                onChangeText={(masked) => {
                                    setReturnDate(masked);
                                }}
                                mask={[
                                    /\d/,
                                    /\d/,
                                    "/",
                                    /\d/,
                                    /\d/,
                                    "/",
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/
                                ]}
                            />
                        </View>
                        <Input
                            placeholder="Insira o resumo da consulta..."
                            onChangeText={(text) =>
                                formatJson("description", text)
                            }
                        />
                    </ViewContainer>
                    <CancelAndSaveButton onPress={post} onBack={() => setShowNewConsultation(false)} />
                </ModalContainer>
            ) : (
                <></>
            )}
        </>
    );
}
