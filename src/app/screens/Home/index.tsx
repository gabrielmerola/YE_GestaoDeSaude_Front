import { TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import { Title } from '@components/Title/Title'
import { Button, ButtonText, Container, SubTitle, Txt } from "./styles"




export default function Home({ navigation }: any) {
    return (
        <Container>
            <SubTitle>YE Gestão de Saúde</SubTitle>
            <Image  alt="Logo" />
            <Title color='white'>Boas-Vindas!</Title>
            <Txt>Gerencie sua saúde com facilidade!Use nosso aplicativo para conferência de exames, receba resultados em tempo real e lembretes personalizados para seus medicamentos!</Txt>

            <Button onPress={() => navigation.navigate('Login')}>
                <ButtonText>Login</ButtonText>
            </Button>

            <Button onPress={() => navigation.navigate('Register')}>
                <ButtonText>Cadastro</ButtonText>
            </Button>
        </Container>


    )
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 120,
        gap: 32,
        backgroundColor:'#D9D9D9',
        flex: 1
    },
    subTitle: {
        color: '#8D8D99',
        fontSize: 32,

    },
    text: {
        color: '#127856',
        textAlign: 'center',
        fontFamily: 'Jomolhari',
        fontSize: 16,
        fontWeight: '400',
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#739489', // Pode ser ajustado conforme necessário
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4, // Adiciona a elevação para sombra no Android
        padding: 10, // Pode ser ajustado conforme necessário
        width: 200,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
}) 