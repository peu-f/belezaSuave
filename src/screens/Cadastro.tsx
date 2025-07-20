import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../styles/fonts';


export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Beleza Suave</Text>
      <Text style={styles.subtitulo}>Agendamento rápido, sem complicações.</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput style={styles.input} keyboardType="phone-pad" />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} keyboardType="email-address" />

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.botao} >
        <Text style={styles.textoBotao}>Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Já tem uma conta?{' '}
        <Text style={styles.link}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 24,
    justifyContent: 'center',
  },
  titulo: {
    fontFamily: fonts.pacifico,
    fontSize: 32,
    color: '#7B68EE',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
  },
  botao: {
    backgroundColor: '#7B68EE',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    color: '#fff',
    fontFamily: fonts.poppinsBold,
    fontSize: 16,
  },
  footer: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
    color: '#333',
  },
  link: {
    color: '#7B68EE',
    fontFamily: fonts.poppinsBold,
  },
});