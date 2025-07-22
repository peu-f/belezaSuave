import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import {colors} from '../styles/global';
import { fonts } from '../styles/fonts';

type SubtitleProps = {
    texto?: string;
};

export default function Subtitle({texto}: SubtitleProps) {
  return (
    <Text style={[styles.subtitle]}>{texto}</Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 24,
    color: '#2c3e50',
    fontFamily: fonts.poppinsRegular,
    textAlign: 'center',
  },
  },
);

