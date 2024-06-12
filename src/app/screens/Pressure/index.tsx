import { Header } from "@components/Header";
import {Loading} from "@components/Loading";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import {
    BloodPressureContext,
    PressureType
} from "@context/blood-pressure-context";
import { Container, TextContainer, Txt } from "@screens/Pressure/styles";
import { FlatList } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import PopUp from "src/app/components/PopUp";
import {Image} from "react-native";
import Logo from "../../../../assets/logo-verde.png";

export default function Pressure() {
    const [data, setData] = useState<PressureType[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const { getBloodPressure, postBloodPressure, deleteBloodPressure } =
        useContext(BloodPressureContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    async function loadData() {
        try {
            const pressureData = await getBloodPressure();

            if (pressureData === undefined) {
                return;
            }

            pressureData.sort(function (a: PressureType, b: PressureType) {
                const firstDate = a.date.split("/").reverse().join("");
                const secondDate = b.date.split("/").reverse().join("");
                return firstDate.localeCompare(secondDate);
            });


            setData(pressureData);
            setIsLoading(false);
        } catch (error) {
            console.log("Error fetching pressure data");
            setIsLoading(false);
            setIsEmpty(true);
        }
    }

    const handlePost = (list: object) => {
        const response = postBloodPressure(list);
        response.then((json) => {
            loadData();
        });
    };
    const handleDelete = (id: number) => {
        const response = deleteBloodPressure(id);
        response.then((json) => {
            loadData();
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Header text="Pressão" isBackPress />
            <Container style={{ flex: 1, justifyContent: "space-between" }}>
                {isLoading ?
                    <Container>
                        <Loading />
                    </Container>
                    :
                    isEmpty ?
                        <TextContainer>
                            <Image source={Logo} alt="Logo"/>
                            <Txt>Nenhuma aferição de glicemia encontrada.</Txt>

                        </TextContainer>
                        :
                        <FlatList
                            data={data}
                            keyExtractor={(item) =>
                                "Pressure FlatList " + item.id.toString()
                            }
                            renderItem={({ item }) => <Table rows={[item]} />}
                        />
                }

                <PopUpAddButton onOpen={handleOpenPopUp} />
            </Container>


            {showPopUp ? (
                <PopUp
                    onClose={handleClosePopUp}
                    onPost={handlePost}
                    popUpType="PRESSURE"
                />
            ) : (
                <></>
            )}
        </>
    );
}
