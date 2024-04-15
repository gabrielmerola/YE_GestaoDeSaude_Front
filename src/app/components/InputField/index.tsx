import { Input, FormControl, IInputProps } from "native-base";

type InputProps = IInputProps & {
    label?: string;
};

export function InputField({ label, ...rest }: InputProps): JSX.Element {
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
            />
        </FormControl>
    );
}
