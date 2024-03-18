import { Platform, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    /* padding: 0 15px 0 15px; */
    ${Platform.OS === "ios" &&
    `
        margin-top: 30px;`}
`;

export const ContainerTxt = styled.View`
    width: 80%;
    align-items: center;
    justify-content: center;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ball: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: "#508473",
        position: "absolute",
        zIndex: 1
    },
    icon: {
        color: "white",
        zIndex: 2
    }
});
