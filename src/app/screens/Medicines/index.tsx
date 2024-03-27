import BottomAddButton from "@components/BottomAddButton";
import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { PopUpAddButton } from "@components/PopUpAddButton";
import {
    ButtonContainer,
    ModalContainer,
    View
} from "@screens/Medicines/styles";
import React, { useState } from "react";

const json = [
    {
        text: "Losartana",
        function: () => console.log("Losartana")
    }
];

export default function Medicines({ navigation }: any) {
    const [showNewMedicines, setShowNewMedicines] = useState(true);

    return (
        <>
            <Header text="Medicamentos" isBackPress />
            <View>
                {/*<MedicinesAndButton*/}
                {/*    text="Losartana"*/}
                {/*    text2="08:00"*/}
                {/*    chevron*/}
                {/*/>*/}
                {/*<MedicinesAndButton*/}
                {/*    text="Hidrocolorotiazida"*/}
                {/*    text2="08:00"*/}
                {/*    chevron*/}
                {/*/>*/}
                {/*<MedicinesAndButton*/}
                {/*    text="Pantoprazol"*/}
                {/*    text2="12:00"*/}
                {/*    chevron*/}
                {/*/>*/}
            </View>
            <ButtonContainer>
                <PopUpAddButton onOpen={() => setShowNewMedicines(true)} />
            </ButtonContainer>
            {/*<BottomAddButton screenName="NewMedicine" navigation={navigation} />*/}

            {showNewMedicines ? (
                <ModalContainer>
                    <Header
                        text="Novo Medicamento"
                        isModal
                        onModalClose={() => setShowNewMedicines(false)}
                    />
                    {/*<View>*/}
                    {/*    <MedicinesAndButton*/}
                    {/*        text="Nome: "*/}
                    {/*        input*/}
                    {/*    />*/}
                    {/*    <MedicinesAndButton*/}
                    {/*        text="Horário"*/}
                    {/*        text2="09:00"*/}
                    {/*    />*/}
                    {/*    <MedicinesAndButton*/}
                    {/*        text="Período"*/}
                    {/*        text2="7 dias"*/}
                    {/*    />*/}
                    {/*    <MedicinesAndButton*/}
                    {/*        text="Intervalo"*/}
                    {/*        text2="8hs"*/}
                    {/*    />*/}
                    {/*    <MedicinesAndButton*/}
                    {/*        text="Quantidade"*/}
                    {/*        text2="1"*/}
                    {/*    />*/}
                    {/*</View>*/}
                    {/*<CancelAndSaveButton/>*/}
                </ModalContainer>
            ) : (
                <></>
            )}
        </>
    );
}
