import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ViewToken,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/navigation';
import { colors } from '../styles/global';

import { Promocao } from '../@types/navigation'; // Importando o tipo Promocao
const { width } = Dimensions.get('window');

const promocoes = [
  {
    id: '1',
    imagem: '../../assets/homeimg.png',
    titulo: 'Promoção de Açaí',
    descricao: 'Leve 2, pague 1!',
  },
  {
    id: '2',
    imagem: '../../assets/homeimg.png',
    titulo: 'Açaí com granola',
    descricao: 'Granola grátis no combo!',
  },
  {
    id: '3',
    imagem: '../../assets/homeimg.png',
    titulo: 'Açaí com leite condensado',
    descricao: 'Só hoje!',
  },
];

export default function CarrosselPromocoes() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [indexAtivo, setIndexAtivo] = useState(0);

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setIndexAtivo(viewableItems[0].index || 0);
      }
    }
  );

  const abrirPromocao = (promo: Promocao) => {
  navigation.navigate('Promocao', {
    id: promo.id,
    titulo: promo.titulo,
    descricao: promo.descricao,
    imagem: promo.imagem,
  });
};
  return (
    <View style={styles.container}>
      <FlatList
        data={promocoes}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => abrirPromocao(item)}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
          </TouchableOpacity>
        )}
      />

      {/* Indicadores (bolinhas) */}
      <View style={styles.indicadores}>
        {promocoes.map((_, i) => (
          <View
            key={i}
            style={[
              styles.bolinha,
              i === indexAtivo ? styles.bolinhaAtiva : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 330,
  },
  image: {
    width: width,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  indicadores: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bolinha: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  bolinhaAtiva: {
    backgroundColor: colors.primary, // ou qualquer cor do seu tema
    width: 10,
    height: 10,
  },
});
