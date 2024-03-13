import { VStack, Image, Text, Box, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { Buton } from '@components/Button/Button';
import { InputField } from '@components/InputField/InputField';
import { Title } from '@components/Title/Title';
import { Footer } from '@components/Footer/Footer';


export default function Login({ navigation }: any) {
  return (
    <>
      <VStack flex={1} alignItems="center" justifyContent="center" p={5} >
        <Image alt="Logo" />

        <Title>
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
        <Buton onPress={() => navigation.navigate('Main')} >Entrar</Buton>

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


      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Footer />
      </TouchableOpacity>

    </>

  );
}
