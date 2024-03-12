import { VStack, Image, Text, Box, Link, View } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from '../../../assets/Header.png'
import { Buton } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { Title } from '../../components/Title';

export default function Login({ navigation }: any) {
  return (
    <>
      <VStack flex={1} alignItems="center" justifyContent="center" p={5} >
        <Image source={Logo} alt="Logo"  />

        <Title color="green.500">
          YE GESTÃO DE SAÚDE
        </Title>
        <Box>
          <InputField
            label="Email"
            placeholder='Insira seu endereço de e-mail'
          />
          <InputField
            label="Senha"
            placeholder='Insira sua senha'
            secureTextEntry={true}
          />
        </Box>
        <Buton >Entrar</Buton>

        <Link href='' mt={2}>
          Esqueceu sua senha?
        </Link>

        <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
          <Text>Ainda não tem cadastro?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text color="blue.500">
              Faça seu cadastro!
            </Text>
          </TouchableOpacity>

        </Box>

      </VStack>


      <Box w="100%" height="8%" flexDirection='row-reverse' alignItems='center' justifyContent="end" bgColor='#739489'>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text color="white" mr={7} fontSize='14'>
                    Sobre Nós
                </Text>
            </TouchableOpacity>
        </Box>

    </>

  );
}
