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
    icone: {
        alignSelf: "flex-end",
        fontWeight: "bold"
    }
});