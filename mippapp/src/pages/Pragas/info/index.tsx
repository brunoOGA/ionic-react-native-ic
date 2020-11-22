/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
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
} from './styles';

interface Praga {
  id: string;
  nome: string;
  nomeCientifico: string;
  responsavelLancamento: string;
  ultimaAlteracao: Date;
  tamanho: string;
}

interface RouteParams {
  index: Number;
}

const InfoPragas: React.FC = () => {
  const [praga, setPraga] = useState<Praga | null>(null);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();
  const index = routeParams.index;

  useEffect(() => {
    api.get(`/pragas/${index}`).then((response) => {
      setPraga(response.data);
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
          <HeaderText>Praga</HeaderText>
        </Header>
        <Container>
          {praga && (
            <>
              <Row>
                <RowText>Nome:</RowText>
                <RowText>{praga.nome}</RowText>
              </Row>
              <Row>
                <RowText>Nome Científico:</RowText>
                <RowText>{praga.nomeCientifico}</RowText>
              </Row>
              <Row>
                <RowText>Tamanho:</RowText>
                <RowText>{praga.tamanho}</RowText>
              </Row>
              <Row>
                <RowText>Responsável Lançamento:</RowText>
                <RowText>{praga.responsavelLancamento}</RowText>
              </Row>
              <Row>
                <RowText>Última alteração:</RowText>
                <RowText>
                  {new Date(praga.ultimaAlteracao).getDate()}/
                  {new Date(praga.ultimaAlteracao).getMonth() + 1}/
                  {new Date(praga.ultimaAlteracao).getFullYear()}
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

export default InfoPragas;
