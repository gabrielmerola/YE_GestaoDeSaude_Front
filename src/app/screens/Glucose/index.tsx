import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { PressureType } from "@context/blood-pressure-context";
import { GlucoseContext, GlucoseType } from "@context/glucose_context";
import { FlatList } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import PopUp from "src/app/components/PopUp";
import {Container} from "@screens/Pressure/styles";
import {Loading} from "@components/Loading";
import {TextContainer, Txt} from "@screens/Glucose/styles";
import {Image} from "react-native";
import Logo from "../../../../assets/logo-verde.png";

export default function Glucose() {
    const [data, setData] = useState<GlucoseType[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const { getGlucose, postGlucose, deleteGlucose } =
        useContext(GlucoseContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    async function loadData() {
        try {
            const glucoseData = await getGlucose();

            if (glucoseData === undefined) {
                return;
            }

            glucoseData.sort(function (a: PressureType, b: PressureType) {
                const firstDate = a.date.split("/").reverse().join("");
                const secondDate = b.date.split("/").reverse().join("");
                return firstDate.localeCompare(secondDate);
            });

            setData(glucoseData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching glucose data");
            setIsLoading(false);
            setIsEmpty(true);
        }
    }

    const handlePost = (list: object) => {
        const response = postGlucose(list);
        response.then(() => {
            loadData();
        });
    };

    // const handleDelete = (id: number) => {
    //     const response = deleteGlucose(id);
    //     response.then((json) => {
    //         loadData();
    //     });
    // };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Header text="Glicemia" isBackPress />
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
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Table rows={[item]} />}
                    />
            }

            <PopUpAddButton onOpen={handleOpenPopUp} onDelete={() => {}} />
            {showPopUp ? (
                <PopUp
                    onClose={handleClosePopUp}
                    onPost={handlePost}
                    popUpType="GLUCOSE"
                />
            ) : (
                <></>
            )}
        </>
    );
}
