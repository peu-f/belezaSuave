import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../@types/navigation';
import { fonts } from '../styles/fonts';
import { colors } from '../styles/global';
import Container from '../components/Conteiner';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Input from '../components/Input';
import Button from '../components/Button';

import { StackNavigationProp } from '@react-navigation/stack';

export default function Cadastro() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); //Colar em toas as telas que usam navegação

  return (
    <Container style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      <Title />
      <Subtitle texto="Agendamento rápido, sem complicações." />

      <Input label="Nome" placeholder='Digite seu nome'/>
      <Input label="Telefone" keyboardType="phone-pad"  placeholder='Digite seu telefone'/>
      <Input label="Email" keyboardType="email-address" placeholder='Digite seu E-mail'/>
      <Input label="Senha" secureTextEntry placeholder='Crie sua senha'/>

      <Button botaoTexto="Cadastre-se" onPress={() => {}} />

      <Text style={styles.footer}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={
          () => navigation.navigate('Login')
          } >
          Entrar
        </Text>
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  footer: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 100,
    color: '#333',
    alignItems: 'flex-end',
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.poppinsBold,
  },
});
