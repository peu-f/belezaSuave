import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { fonts } from '../styles/fonts';
import { colors } from '../styles/global';
import InputField from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Conteiner from '../components/Conteiner';
import { RootStackParamList } from '../@types/navigation'; // Ajuste o caminho se necessário
export default function Login() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Conteiner >
      <Title />
      <Subtitle texto="Faça login para continuar" />

      <InputField label="Email:" keyboardType="email-address" />
      <InputField label="Senha:" secureTextEntry />

      <Button
        botaoTexto="Entrar"
        onPress={() => navigation.navigate('Home')}
      />

      <Text style={styles.footer}>
        Ainda não tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
          Cadastre-se
        </Text>
      </Text>
    </Conteiner>
  );
}

const styles = StyleSheet.create({
  footer: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
    color: '#333',
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.poppinsBold,
  },
});
//Totalmente componentizado ajhjhsjahsdasdgasjhdg