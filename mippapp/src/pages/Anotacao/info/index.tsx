/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';

import api from '../../../services/api';

import {
  Container,
  Header,
  BackButton,
  HeaderText,
  Row,
  RowText,
  RowTitle,
} from './styles';

interface Praga {
  id: string;
  mediaEncontrada: string;
  nome: string;
  tamanho: string;
}
interface Doenca {
  id: string;
  mediaEncontrada: string;
  nome: string;
}
interface Inimigos {
  id: string;
  mediaEncontrada: string;
  nome: string;
}
interface Anotacao {
  id: string;
  dataDaColeta: string;
  estadioDaCultura: string;
  desfolha: 'string';
  pragas: Praga[];
  doencas: Doenca[];
  inimigos: Inimigos[];
  responsavelLancamento: string;
  ultimaAlteracao: Date;
}

interface RouteParams {
  index: Number;
}

const InfoAnotacoes: React.FC = () => {
  const [anotacao, setAnotacao] = useState<Anotacao | null>();
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();
  const index = routeParams.index;

  useEffect(() => {
    api.get(`/anotacoes/${index}`).then((response) => {
      setAnotacao(response.data);
    });
  }, []);

  const close = function () {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="black" />
          </BackButton>
          <HeaderText>Anotação de Campo</HeaderText>
        </Header>
        <Container>
          {anotacao && (
            <>
              <Row>
                <RowText>Nome:</RowText>
                <RowText>
                  {new Date(anotacao.dataDaColeta).getDate()}/
                  {new Date(anotacao.dataDaColeta).getMonth() + 1}/
                  {new Date(anotacao.dataDaColeta).getFullYear()}
                </RowText>
              </Row>
              <Row>
                <RowText>Responsável Lançamento:</RowText>
                <RowText>{anotacao.responsavelLancamento}</RowText>
              </Row>
              <Row>
                <RowText>Estádio da Cultura:</RowText>
                <RowText>{anotacao.estadioDaCultura}</RowText>
              </Row>
              <Row>
                <RowText>% de Desfolha(em números inteiros)</RowText>
                <RowText>{anotacao.desfolha}</RowText>
              </Row>
              <RowTitle>Informar Dados FLutuação das Pragas</RowTitle>
              {anotacao.pragas.map((praga, index) => (
                <Row key={index}>
                  <RowText>{praga.nome}</RowText>
                  <RowText>{praga.tamanho}</RowText>
                  <RowText>{praga.mediaEncontrada}</RowText>
                </Row>
              ))}
              <RowTitle>Informar Dados Doenças das Pragas</RowTitle>
              {anotacao.doencas.map((doenca, index) => (
                <Row key={index}>
                  <RowText>{doenca.nome}</RowText>
                  <RowText>{doenca.mediaEncontrada}</RowText>
                </Row>
              ))}
              <RowTitle>Informar Dados de Inimigos Naturais</RowTitle>
              {anotacao.inimigos.map((inimigo, index) => (
                <Row key={index}>
                  <RowText>{inimigo.nome}</RowText>
                  <RowText>{inimigo.mediaEncontrada}</RowText>
                </Row>
              ))}
              <Row>
                <RowText>Última alteração:</RowText>
                <RowText>
                  {new Date(anotacao.ultimaAlteracao).getDate()}/
                  {new Date(anotacao.ultimaAlteracao).getMonth() + 1}/
                  {new Date(anotacao.ultimaAlteracao).getFullYear()}
                </RowText>
              </Row>
            </>
          )}
          <Button
            style={{backgroundColor: '#428cff'}}
            onPress={() => {
              close();
            }}>
            Fechar
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InfoAnotacoes;
