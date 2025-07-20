import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { fonts } from '../styles/fonts';
import { RootStackParamList } from '../@types/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Beleza Suave</Text>
      <Text style={styles.subtitulo}>Agendamento rápido, sem complicações.</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} keyboardType="email-address" />

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Ainda não tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
          Cadastre-se
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
