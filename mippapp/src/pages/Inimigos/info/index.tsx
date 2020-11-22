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

interface Inimigo {
  id: string;
  nome: string;
  responsavelLancamento: string;
  ultimaAlteracao: Date;
}

interface RouteParams {
  index: Number;
}

const InfoInimigos: React.FC = () => {
  const [inimigo, setInimigo] = useState<Inimigo | null>(null);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();
  const index = routeParams.index;

  useEffect(() => {
    api.get(`/inimigos/${index}`).then((response) => {
      setInimigo(response.data);
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
          <HeaderText>Inimigo Natural de Pragas</HeaderText>
        </Header>
        <Container>
          {inimigo && (
            <>
              <Row>
                <RowText>Nome:</RowText>
                <RowText>{inimigo.nome}</RowText>
              </Row>
              <Row>
                <RowText>Responsável Lançamento:</RowText>
                <RowText>{inimigo.responsavelLancamento}</RowText>
              </Row>
              <Row>
                <RowText>Última alteração:</RowText>
                <RowText>
                  {new Date(inimigo.ultimaAlteracao).getDate()}/
                  {new Date(inimigo.ultimaAlteracao).getMonth() + 1}/
                  {new Date(inimigo.ultimaAlteracao).getFullYear()}
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

export default InfoInimigos;
