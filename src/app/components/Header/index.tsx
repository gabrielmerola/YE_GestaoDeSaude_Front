import {
    Container,
    View,
    Txt,
    Ball,
    TxtContainer
} from "@components/Header/styles";
import { useNavigation } from "@react-navigation/native";
import { Button, ChevronLeftIcon } from "native-base";
import React from "react";

interface HeaderProps {
    text?: string;
    isBackPress?: boolean;
    isOptionMenu?: boolean;
    isModal?: boolean;
    onModalClose?: () => void;
}

export const Header = ({
    text,
    isBackPress,
    isOptionMenu,
    isModal,
    onModalClose
}: HeaderProps) => {
    const navigation = useNavigation();
    return (
        <Container>
            {isBackPress && (
                <Button
                    variant="unstyled"
                    onPress={() => {
                        navigation.goBack();
                        onModalClose?.();
                    }}
                >
                    <View>
                        <ChevronLeftIcon
                            style={{ color: "#fff" }}
                            name="chevron-left"
                            type="FontAwesome5"
                            size="lg"
                        />
                        <Ball />
                    </View>
                </Button>
            )}

            {isOptionMenu && (
                <Button variant="unstyled">
                    <View>
                        <ChevronLeftIcon
                            style={{ color: "#fff" }}
                            name="chevron-left"
                            type="FontAwesome5"
                            size="lg"
                        />
                        <Ball />
                    </View>
                </Button>
            )}

            {isModal && (
                <Button variant="unstyled" onPress={onModalClose}>
                    <View>
                        <ChevronLeftIcon
                            style={{ color: "#fff" }}
                            name="chevron-left"
                            type="FontAwesome5"
                            size="lg"
                        />
                        <Ball />
                    </View>
                </Button>
            )}

            <TxtContainer>
                <Txt adjustsFontSizeToFit numberOfLines={1}>
                    {text}
                </Txt>
            </TxtContainer>
        </Container>
    );
};
