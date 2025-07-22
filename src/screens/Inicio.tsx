import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/navigation';
import { fonts } from '../styles/fonts'; 
import { colors } from '../styles/global';
import Conteiner from '../components/Conteiner'; 
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Inicio'>;

export default function Inicio() {
  const navigation = useNavigation<NavigationProps>(); //  tipagem da navegação

  return (
    <Conteiner >
      <Image
        source={require('../../assets/homeimg.png')}
        style={styles.imagem}
        resizeMode="contain"
      />

      <View>
        <Title/>
        <Subtitle texto="Agendamento rápido, sem complicações." />  
      </View>  
      <Button botaoTexto="Comece seu agendamento!" onPress={() => navigation.navigate('Login')} />  
        
    </Conteiner>
  );
}



const styles = StyleSheet.create({
  imagem: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
  
});
//Totalmente componentizado ajhjhsjahsdasdgasjhdg