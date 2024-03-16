import { Button, ChevronRightIcon, Input } from "native-base";
import { Text, View } from "react-native";
import { styles } from "./styles";
import React from "react";

interface MedicineAndButtonProps {
    text: string;
    text2?: string;
    chevron?: boolean;
    navigation: any;
    screenName: string;
    input?: boolean;
}

export default function MedicinesAndButton({
    text,
    text2,
    chevron,
    navigation,
    screenName,
    input
}: MedicineAndButtonProps) {
    return (
        <Button
            variant={"unstyled"}
            style={styles.medicineItem}
            onPress={() => navigation.navigate(screenName)}
        >
            <View style={styles.medicineView}>
                <Text style={{ fontSize: 18 }}>
                    {text} {text2 && `: ${text2}`}
                </Text>
                {input && (
                    <Input placeholder={"Digite o nome do medicamento..."} />
                )}
                {chevron && <ChevronRightIcon />}
            </View>
        </Button>
    );
}
