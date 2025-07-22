import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { colors } from '../styles/global';
import { fonts } from '../styles/fonts';

type ButtonProps = {
  botaoTexto?: string;
  onPress: () => void;
  style?: ViewStyle; // 👈 nome certo (minúsculo)
};

export default function Button({ botaoTexto, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.botao, style]} // 👈 junta estilo padrão + estilo vindo por props
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{botaoTexto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 15,
    marginBottom: 30,
    
  },
  textoBotao: {
    color: colors.buttonText,
    fontSize: 18,
    fontFamily: fonts.poppinsBold,
    textAlign: 'center',
  },
});
