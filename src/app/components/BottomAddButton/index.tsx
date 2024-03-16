import { styles } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface BottomAddButtonProps {
    navigation: any;
    screenName: string;
}

export default function BottomAddButton({
    navigation,
    screenName
}: BottomAddButtonProps) {
    return (
        <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate(screenName)}
        >
            <Text style={styles.buttonText}>
                <Text style={styles.plusText}>+</Text> Adicionar
            </Text>
        </TouchableOpacity>
    );
}
