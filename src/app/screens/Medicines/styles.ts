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
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: "#CCCCCC"
    },
    medicineView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    addButton: {
        backgroundColor: "#508473",
        padding: 12,
        paddingVertical: 6,
        borderRadius: 14,
        width: "35%",
        alignSelf: "center"
    },
    plusText: {
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center"
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
