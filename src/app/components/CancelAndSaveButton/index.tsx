import { Button } from "native-base";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

interface CancelAndSaveButtonProps {
    navigation?: any;
}

export default function CancelAndSaveButton({
    navigation
}: CancelAndSaveButtonProps) {
    return (
        <View style={styles.buttons}>
            <Button
                variant="unstyled"
                style={{ width: "50%" }}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}> Cancelar</Text>
            </Button>
            <Button
                variant="unstyled"
                style={{ width: "50%", marginLeft: 2 }}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}> Salvar</Text>
            </Button>
        </View>
    );
}
