import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import React from "react";

import { ModalContainer, View } from "./styles";

type DrawerItemsModalProps = {
    header: string;
    onModalClose: () => void;
    rows: [object];
    isCancelAndSave: boolean;
};

export default function DrawerItemsModal({
    header,
    onModalClose,
    rows,
    isCancelAndSave
}: DrawerItemsModalProps) {
    return (
        <ModalContainer>
            <Header text={header} isModal onModalClose={() => onModalClose} />
            <View>
                {rows.map((row) => (
                    <MedicinesAndButton
                        text={row.text}
                        modalFunction={row.function}
                    />
                ))}
            </View>
            {isCancelAndSave ? (
                <CancelAndSaveButton onPress={() => onModalClose} />
            ) : (
                <></>
            )}
        </ModalContainer>
    );
}
