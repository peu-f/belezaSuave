import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../styles/fonts';

interface PromocoesBoxProps {
  children?: ReactNode;
}

const PromocoesBox: React.FC<PromocoesBoxProps> = ({ children }) => {
  return (
    <View style={styles.promocoesContainer}>
      <Text style={styles.promocoesText}>Promoções</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  promocoesContainer: {
    backgroundColor: '#fbeee6',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0cfcf',
    maxHeight: 200,
  },
  promocoesText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 28,
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 16,
    
},
});

export default PromocoesBox;
