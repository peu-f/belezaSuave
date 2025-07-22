import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import {colors} from '../styles/global';

interface ContainerProps {
  //O children é oq tem dentro do componente
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <View style={[styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: colors.background,
  },
});

