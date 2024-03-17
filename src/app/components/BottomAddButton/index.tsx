import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

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
