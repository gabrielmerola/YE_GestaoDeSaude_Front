import { NativeBaseProvider, StatusBar } from 'native-base'
import Routes from './src/app/routes/stack.routes';
import { THEMES } from './src/styles/themes';


export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}