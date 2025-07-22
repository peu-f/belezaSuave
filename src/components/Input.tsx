import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, TextStyle } from 'react-native';
import { fonts } from '../styles/fonts';
import { colors } from '../styles/global';

type Props = {
  label: string;
  style?: TextStyle; // 👈 adiciona essa prop
} & TextInputProps;

export default function Input({ label, style, ...rest }: Props) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, style]} {...rest} /> {/* 👈 aplica o style externo */}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 16,
  },
  label: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.text,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.input,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    width: 300,
  },
});
