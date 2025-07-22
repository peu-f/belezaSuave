import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import {colors} from '../styles/global';
import { fonts } from '../styles/fonts';

export default function Title() {
  return (
    <Text style={[styles.titulo]}>Beleza Suave</Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
      fontSize: 29,
      color: colors.text,
      fontFamily: fonts.pacifico,
      textAlign: 'center',
    },
  },
);

