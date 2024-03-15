import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    padding: 0 15px 0 15px;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    margin-right: 70px;
`;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15
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
