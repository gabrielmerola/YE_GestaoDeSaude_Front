import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#F5F5F5"
    },
    medicineItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8
    },
    medicineView: {
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingVertical: 8,
        borderColor: "#CCCCCC",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    buttons: {
        backgroundColor: "#508473",
        paddingVertical: 6,
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center"
    },
    icone: {
        alignSelf: "flex-end",
        fontWeight: "bold"
    }
});
