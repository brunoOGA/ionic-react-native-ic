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
  Col,
  ColText,
  RowText,
  RowTitle,
  RowTable,
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
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="black" />
        </BackButton>
        <HeaderText>Anotação de Campo</HeaderText>
      </Header>
      <ScrollView keyboardShouldPersistTaps="handled">
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
              <RowTable>
                <Col>
                  <ColText>Insetos Praga</ColText>
                </Col>
                <Col>
                  <ColText>Tamanho</ColText>
                </Col>
                <Col>
                  <ColText>Média Encontrada</ColText>
                </Col>
              </RowTable>
              {anotacao.pragas.map((praga, index) => (
                <RowTable key={index}>
                  <Col>
                    <ColText>{praga.nome}</ColText>
                  </Col>

                  <Col>
                    <ColText>{praga.tamanho}</ColText>
                  </Col>

                  <Col>
                    <ColText>{praga.mediaEncontrada}</ColText>
                  </Col>
                </RowTable>
              ))}
              <RowTitle>Informar Dados Doenças das Pragas</RowTitle>
              <RowTable>
                <Col>
                  <ColText>Doença Praga</ColText>
                </Col>
                <Col>
                  <ColText>Média Encontrada</ColText>
                </Col>
              </RowTable>
              {anotacao.doencas.map((doenca, index) => (
                <RowTable key={index}>
                  <Col>
                    <ColText>{doenca.nome}</ColText>
                  </Col>

                  <Col>
                    <ColText>{doenca.mediaEncontrada}</ColText>
                  </Col>
                </RowTable>
              ))}
              <RowTitle>Informar Dados de Inimigos Naturais</RowTitle>
              <RowTable>
                <Col>
                  <ColText>Inimigos Naturais</ColText>
                </Col>
                <Col>
                  <ColText>Média Encontrada</ColText>
                </Col>
              </RowTable>
              {anotacao.inimigos.map((inimigo, index) => (
                <RowTable key={index}>
                  <Col>
                    <ColText>{inimigo.nome}</ColText>
                  </Col>

                  <Col>
                    <ColText>{inimigo.mediaEncontrada}</ColText>
                  </Col>
                </RowTable>
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
