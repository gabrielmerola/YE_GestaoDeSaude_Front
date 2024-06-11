import { VStack } from "native-base";
import React from "react";

import { Button, ButtonText, ImageIcon } from "./styles";

const ConfigButtons = ({ onPress, text, iconSource, screenName }: any) => {
    const handlePress = () => {
        onPress(screenName);
    };
    return (
        <VStack>
            <Button onPress={handlePress}>
                <ButtonText>{text}</ButtonText>
                <ImageIcon source={iconSource} />
            </Button>
        </VStack>
    );
};

export default ConfigButtons;
