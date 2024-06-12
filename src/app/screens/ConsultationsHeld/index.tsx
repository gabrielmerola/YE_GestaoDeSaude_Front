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
import { useCallback, useContext, useState } from "react";
import { Text, View } from "react-native";
import MaskInput from "react-native-mask-input";
import ListInteractableItem from "src/app/components/ListInteractableItem";
import { ConsultationReponsiveType } from "@api/repositories/consultation_repository_http";
import Toast from "react-native-toast-message";
import {Loading} from "@components/Loading";

export default function ConsultationsHeld({ navigation }: any) {
    const { getAllConsultation, getConsultationById, postConsultation } =
        useContext(ConsultationContext);
    const [showConsultationsData, setShowConsultationsData] = useState(false);
    const [showNewConsultation, setShowNewConsultation] = useState(false);
    const [expertise, setExpertise] = useState("");
    const [time, setTime] = useState("");
    const [returnDate, setReturnDate] = useState<string>("");
    const [description, setDescription] = useState("");

    const [getAllConst, setGetAllConst] = useState<ConsultationReponsiveType[]>(
        []
    );
    const [getByIdConst, setGetByIdConst] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    const [date, setDate] = useState("");

    async function getAll() {
        setIsLoading(true);
        const response: any = await getAllConsultation();
        if (response == "") {
            setGetAllConst([]);
            setIsLoading(false);
        } else {
            setGetAllConst(response);
            setIsLoading(false);
        }
    }

    async function getById(id: number) {
        setIsLoading(true);
        const response = await getConsultationById(id);
        if (response !== undefined) {
            setGetByIdConst(response);
            setIsLoading(false);
            setShowConsultationsData(true);
        }
    }

    async function post() {
        console.log(expertise, date, time, returnDate, description)
        if(expertise === "" || date === "" || returnDate === "" || description === "") {
            Toast.show({
                type: "error",
                text1: "Erro ao criar consulta",
                text2: "Preencha todos os campos.",
            });
            return;
        }

        const formattedDate = date.split("/").reverse().join("-");
        const formattedDateReturn = returnDate.split("/").reverse().join("-");

        const postConst = {
            name: expertise,
            date: formattedDate,
            // hour: time,
            dateReturn: formattedDateReturn,
            description: description,
            expertise: expertise
        }

        await postConsultation(postConst).then((response: any) => {
            if(response.status === 422){
                console.log(response.status)
                Toast.show({
                    type: "error",
                    text1: "Erro ao criar consulta",
                    text2: "Informações inválidas para criar consulta"
                });
                return;
            }
            if(response.status !== 201){
                console.log(response.status)
                Toast.show({
                    type: "error",
                    text1: "Erro ao criar consulta",
                    text2: response.message,
                });
                return;
            } else {
                Toast.show({
                    type: "success",
                    text1: "Consulta criada com sucesso!",
                });
                setExpertise("");
                setDate("");
                setTime("");
                setReturnDate("");
                setDescription("");
                setShowNewConsultation(false);
                getAll();
            }
        })

    }

    useFocusEffect(
        useCallback(() => {
            getAll();
        }, [])
    );

    return (
        <>
            <Header text="Consultas" isBackPress />
            {isLoading ? (
                <Loading/>
            ) : (
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
            )}
            {showConsultationsData ? (
                <ModalContainer>
                    <Header
                        text="Dados da Consulta"
                        isModal
                        onModalClose={() => setShowConsultationsData(false)}
                    />
                    <TableContainer>
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
                        {/*<Table*/}
                        {/*    rows={[*/}
                        {/*        {*/}
                        {/*            nome: "Horário",*/}
                        {/*            especialty: getByIdConst.hour*/}
                        {/*        }*/}
                        {/*    ]}*/}
                        {/*/>*/}
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
                    </TableContainer>
                </ModalContainer>
            ) : (
                <></>
            )}
            {showNewConsultation ? (
                <ModalContainer>
                    <View style={{zIndex:10}}>
                        <Toast />
                    </View>
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
                            inputValue={expertise}
                            onChangeText={(text) => {
                                setExpertise(text);
                            }}
                            sizeType="SMALL"
                        />
                        <ListInteractableItem
                            text="Data:"
                            isButton={false}
                            inputType="DATE"
                            inputValue={date}
                            setDate={setDate}
                            sizeType="SMALL"
                        />
                        <ListInteractableItem
                            text="Data de Retorno:"
                            isButton={false}
                            inputType="DATE"
                            inputValue={returnDate}
                            setDate={setReturnDate}
                            sizeType="SMALL"
                        />
                        <Input
                            placeholder="Insira o resumo da consulta..."
                            value={description}
                            onChangeText={(text) =>
                                setDescription(text)
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