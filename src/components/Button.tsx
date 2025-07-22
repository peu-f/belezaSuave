import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import {colors} from '../styles/global';
import { fonts } from '../styles/fonts';

type SubtitleProps = {
    botaoTexto?: string;
    onPress: () => void;
    Style?: ViewStyle;
};

export default function Button({ botaoTexto, onPress, Style }: SubtitleProps) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{botaoTexto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  },
});

