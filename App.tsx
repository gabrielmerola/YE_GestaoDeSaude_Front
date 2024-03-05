import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/app/routes';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar style="auto" />
      <Routes/>
    </View>
  );
}