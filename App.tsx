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
import { fonts } from './src/styles/fonts';
import { colors } from './src/styles/global';

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
      <Stack.Navigator initialRouteName="Inicio" 
      screenOptions={{
    headerStyle: {
      backgroundColor: colors.background, // muda o fundo da barra
    },
    headerTintColor: colors.text, // muda a cor dos ícones e do texto (como o título e o botão de voltar)
    headerTitleStyle: {
      fontFamily: fonts.poppinsBold, // se quiser uma fonte personalizada
      fontSize: 20,
    },
  }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}