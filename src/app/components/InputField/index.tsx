import { Input, FormControl, IInputProps,  } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ImageVisability } from "./styles";

type InputProps = IInputProps & {
    label?: string;
    view?: boolean;
};

const [isPasswordVisible, setIsPasswordVisible] = useState(false);

export function InputField({ label, view, ...rest }: InputProps): JSX.Element {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            
                    <Input
                    size="lg"
                    w="100%"
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3}
                    {...rest}
                    InputRightElement={view? <TouchableOpacity
                        onPress={() =>
                            setIsPasswordVisible(!isPasswordVisible)
                        }
                >
                        <ImageVisability
                            source={
                                isPasswordVisible
                                    ? require("../../../../assets/Visualizar.png")
                                    : require("../../../../assets/Ocultar.png")
                            }
                         />
                </TouchableOpacity> : <></>}
                /> 
        </FormControl>
    );
}
