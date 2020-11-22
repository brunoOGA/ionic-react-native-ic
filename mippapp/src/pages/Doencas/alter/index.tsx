/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useState, useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import api from '../../../services/api';

import {Container, Header, BackButton, HeaderText} from './styles';

interface CriarDoenca {
  nome: string;
}

interface Doenca {
  id: string;
  nome: string;
}

interface RouteParams {
  index: Number;
}

const AlterDoencas: React.FC = () => {
  const [doenca, setDoenca] = useState<Doenca | null>(null);
  const formRef = useRef<FormHandles>(null);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();
  const index = routeParams.index;

  useEffect(() => {
    api.get(`/doencas/${index}`).then((response) => {
      setDoenca(response.data);
    });
  }, []);

  const handleSignIn = useCallback(
    async (data: CriarDoenca) => {
      await api.put(`/doencas/${index}`, data);
      navigation.navigate('IndexDoencas', data);
    },
    [navigation],
  );

  const cancel = function () {
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
            <Icon name="arrow-left" size={24} color="#ff4961" />
          </BackButton>
          <HeaderText>Doença de Praga</HeaderText>
        </Header>
        <Container>
          <Form
            initialData={{nome: doenca?.nome}}
            ref={formRef}
            onSubmit={handleSignIn}
            style={{width: '100%'}}>
            <Input
              name="nome"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}>
              Nome:
            </Input>
            <Button
              style={{backgroundColor: '#ff4961'}}
              onPress={() => {
                formRef.current?.setFieldValue('nomeCientifico', '');
                formRef.current?.setFieldValue('nome', '');

                cancel();
              }}>
              CANCELAR
            </Button>
            <Button
              style={{backgroundColor: '#428cff'}}
              onPress={() => {
                formRef.current?.submitForm();
                formRef.current?.setFieldValue('nomeCientifico', '');
                formRef.current?.setFieldValue('nome', '');
              }}>
              SALVAR
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AlterDoencas;
