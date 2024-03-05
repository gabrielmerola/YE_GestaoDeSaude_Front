import {
    VStack,
    Image,
    Text,
    Box,
    FormControl,
    Input,
    Button,
    Link
} from "native-base";
import { TouchableOpacity } from "react-native";

export default function Login() {
    return (
        <VStack flex={1} justifyContent={"center"} alignItems={"center"} p={5}>
            <Box>
                <FormControl mt={3}>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                        placeholder={"Insira seu endereço de e-mail"}
                        size={"lg"}
                        w={"100%"}
                        borderRadius={"lg"}
                        backgroundColor={"gray.100"}
                        shadow={3}
                    />
                </FormControl>
                <FormControl mt={3}>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input
                        placeholder={"Insira seu endereço de senha"}
                        size={"lg"}
                        w={"100%"}
                        borderRadius={"lg"}
                        backgroundColor={"gray.100"}
                        shadow={3}
                    />
                </FormControl>
            </Box>
            <Button
                w={"100%"}
                backgroundColor={"blue.800"}
                mt={10}
                borderRadius={"lg"}
            >
                Entrar
            </Button>
            <Link href={"https://www.google.com"} mt={2}>
                Esqueceu sua senha?
            </Link>
            <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={8}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity>
                    <Text color={"blue.500"}>Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}
