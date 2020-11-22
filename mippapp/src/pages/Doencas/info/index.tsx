/* eslint-disable react-hooks/exhaustive-deps */
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
} from './styles';

interface Doenca {
  id: string;
  nome: string;
  responsavelLancamento: string;
  ultimaAlteracao: Date;
}

interface RouteParams {
  index: Number;
}

const InfoDoencas: React.FC = () => {
  const [doenca, setDoenca] = useState<Doenca | null>(null);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();
  const index = routeParams.index;

  useEffect(() => {
    api.get(`/doencas/${index}`).then((response) => {
      setDoenca(response.data);
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
          <HeaderText>Doença de Praga</HeaderText>
        </Header>
        <Container>
          {doenca && (
            <>
              <Row>
                <RowText>Nome:</RowText>
                <RowText>{doenca.nome}</RowText>
              </Row>
              <Row>
                <RowText>Responsável Lançamento:</RowText>
                <RowText>{doenca.responsavelLancamento}</RowText>
              </Row>
              <Row>
                <RowText>Última alteração:</RowText>
                <RowText>
                  {new Date(doenca.ultimaAlteracao).getDate()}/
                  {new Date(doenca.ultimaAlteracao).getMonth() + 1}/
                  {new Date(doenca.ultimaAlteracao).getFullYear()}
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

export default InfoDoencas;
