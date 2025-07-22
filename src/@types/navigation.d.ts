export type RootStackParamList = {
  Inicio: undefined;
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  Promocao: Promocao
};

export type Promocao = {
  id: string;
  imagem: string;
  titulo: string;
  descricao: string;
};
