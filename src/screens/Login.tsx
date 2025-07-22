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
import Input from '../components/Input';
export default function Login() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Conteiner style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      <Title />
      <Subtitle texto="Faça login para continuar" />

      <Input label="E-mail:" keyboardType="email-address" placeholder='Digite seu E-mail' style={{ width: 350 }}
        textContentType="emailAddress" autoComplete="email" autoCapitalize="none" />
      <Input label="Senha:" secureTextEntry  placeholder='Digite sua Senha' style={{ width: 350 }}
        textContentType="password" autoComplete="password" autoCapitalize="none"
      />

      <Button
        botaoTexto="Entrar"
        onPress={() => navigation.navigate('Home')}
        style={{width: 350 }}
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
    marginTop: 300,
    color: '#333',
    alignItems: 'flex-end',
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.poppinsBold,
    
  },
});
//Totalmente componentizado ajhjhsjahsdasdgasjhdg