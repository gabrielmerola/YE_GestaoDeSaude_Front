import { Box, Image, Text, VStack } from "native-base";
import { TouchableOpacity, View } from "react-native";
import Logo from '../../../assets/logo_verde.png'


export default function About() {
    return (
        <>
            <Box w="100%" height="12%" alignItems='center' justifyContent="center" flexDirection='row' bgColor='#739489' p={5} >
                <Text color="white" fontSize='22'>
                    YE Gestão de Saúde
                </Text>
            </Box>
            <View style={{alignItems: 'center'}} >
                <Box w='80%' h='80%' alignItems='center' justifyContent='center' bgColor='#D9D9D9' p={5} mt={20} >
                    <Text mb={3} fontSize='18' >Nos somos o Minha Saúde em Dia, um aplicativo desenvolvido para melhorar a gestão da sua propria saúde e melhorar sua qualidade de vida.</Text>

                    <Text mb={5} fontSize='18' >Nele você pode colocar lembretes de suas consultas, colocar um resumo delas, definir os horários de suas medicções com apenas quatro informações, organizar os resultados de seus exames, bem como armazenar uma copia deles e muito mais.</Text>

                    <Text fontSize='20'>Sua saúde em suas mãos!</Text>
                </Box>
            </View>
        </>
    )
}