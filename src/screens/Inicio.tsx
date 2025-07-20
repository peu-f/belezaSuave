import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/navigation'; // 👈 ajuste se seu path for diferente
import { fonts } from '../styles/fonts'; // 👈 onde você salvou as fontes

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Inicio'>;

export default function Inicio() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/homeimg.png')}
        style={styles.imagem}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.titulo}>Beleza Suave</Text>
        <Text style={styles.texto}>Agendamento rápido, sem complicações.</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textoBotao}>Comece seu agendamento!</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#fadadd',
  },
  imagem: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
  titulo: {
    fontSize: 29,
    color: '#2c3e50',
    fontFamily: fonts.pacifico,
    textAlign: 'center',
  },
  texto: {
    fontSize: 24,
    color: '#2c3e50',
    fontFamily: fonts.poppinsRegular,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#8e44ad',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 30,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
