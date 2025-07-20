import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import {
  Pacifico_400Regular,
} from '@expo-google-fonts/pacifico';
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import Inicio from './src/screens/Inicio';
import Login from './src/screens/Login'; // sua próxima tela
import Home from './src/screens/Home'; // sua próxima tela
import Cadastro from './src/screens/Cadastro';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null

  return (
    // Navegação
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}