import React from 'react';
import { View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { fonts } from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';
import PromocoesBox from '../components/Promocoes';
import ServiceCard from '../components/ServiceCard';
import BottomMenu from '../components/BottomMenu';
import { colors } from '../styles/global';
import CarrosselPromocoes from '../components/Carrossel';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ícone de perfil */}
      <View style={styles.header}>
        <Image source={require('../../assets/homeimg.png')} style={styles.profileIcon} />
      </View>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#888"
        />
        {/* Ícone de busca */}
      </View>

      {/* Promoções */}
      <PromocoesBox >
      <CarrosselPromocoes />
      </PromocoesBox >

      {/* Serviços */}
      <ScrollView style={styles.servicosContainer} showsVerticalScrollIndicator={false}>
        <ServiceCard
          imagem={require('../../assets/homeimg.png')}
          titulo="Escova Modeladora"
          duracao="45 min"
          preco="R$ 60,00"
          onPress={() => {/* ação de agendar */}}
        />
        <ServiceCard
          imagem= {require('../../assets/homeimg.png')}
          titulo="Maquiagem"
          duracao="1h"
          preco="R$ 100,00"
          onPress={() => {/* ação de agendar */}}
        />
      </ScrollView>

      {/* Menu inferior */}
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fadadd',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  profileIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    marginRight: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  servicosContainer: {
    flex: 1,
    marginBottom: 16,
  },
});