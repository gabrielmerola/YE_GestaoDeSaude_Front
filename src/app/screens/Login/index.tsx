import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './style.module';

export function Login() {
    return (
        <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });