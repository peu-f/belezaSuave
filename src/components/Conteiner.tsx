import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../styles/global';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle; // 👈 adicionando prop opcional de estilo
}

export default function Container({ children, style }: ContainerProps) {
  return <View style={[styles.container, style]}>{children}</View>; // 👈 combinando estilos
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
