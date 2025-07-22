import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { fonts } from '../styles/fonts';

type Props = {
  imagem: any;
  titulo: string;
  duracao: string;
  preco: string;
  onPress: () => void;
};

export default function ServiceCard({ imagem, titulo, duracao, preco, onPress }: Props) {
  return (
    <View style={styles.servicoCard}>
      <Image source={imagem} style={styles.servicoImg} />
      <View style={styles.servicoInfo}>
        <Text style={styles.servicoTitulo}>{titulo}</Text>
        <Text style={styles.servicoDesc}>Duração: {duracao}</Text>
        <Text style={styles.servicoDesc}>Preço: {preco}</Text>
        <TouchableOpacity style={styles.agendarBtn} onPress={onPress}>
          <Text style={styles.agendarBtnText}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  servicoCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    padding: 8,
    alignItems: 'center',
    elevation: 2,
  },
  servicoImg: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  servicoInfo: {
    flex: 1,
  },
  servicoTitulo: {
    fontFamily: fonts.poppinsBold,
    fontSize: 20,
    color: '#2c3e50',
    marginBottom: 4,
  },
  servicoDesc: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 2,
  },
  agendarBtn: {
    backgroundColor: '#8e44ad',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  agendarBtnText: {
    color: '#fff',
    fontFamily: fonts.poppinsBold,
    fontSize: 16,
  },
});