import { Text, Box } from "native-base";
import { TouchableOpacity } from "react-native";





export function Footer( {navigation}: any ) {
    return (
        <Box w="100%" height="8%" flexDirection='row-reverse' alignItems='center' justifyContent="end" bgColor='#739489'>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text color="white" mr={7} fontSize='14'>
                    Sobre Nós
                </Text>
            </TouchableOpacity>
        </Box>

    )
}

