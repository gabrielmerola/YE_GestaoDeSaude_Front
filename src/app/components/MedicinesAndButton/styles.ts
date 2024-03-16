import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    icone: {
        alignSelf: "flex-end",
        fontWeight: "bold"
    }
});
