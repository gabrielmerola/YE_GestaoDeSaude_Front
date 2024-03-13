import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../screens/Register"
import Login from "../screens/Login";
import Home from "../screens/Home";
import About from "../screens/About";
import Main from "@screens/Main";
import Pressure from "@screens/Pressure";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: '',
          headerShown: false
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='About'
          component={About}
        />
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Register'
          component={Register}
        />
        <Stack.Screen
          name='Main'
          component={Main}
        />
        <Stack.Screen
          name='Pressure'
          component={Pressure}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
