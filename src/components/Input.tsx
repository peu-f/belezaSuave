import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { fonts } from '../styles/fonts';
import { colors } from '../styles/global';

type Props = {
  label: string;
} & TextInputProps;

export default function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...rest} />
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