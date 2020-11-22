/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import api from '../../../services/api';

import {Container, Header, BackButton, HeaderText} from './styles';

interface CriarInimigo {
  nome: string;
}
const NewInimigos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async (data: CriarInimigo) => {
      await api.post('/inimigos/', data);
      navigation.navigate('IndexInimigos', data);
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
          <BackButton onPress={() => navigation.navigate('IndexInimigos')}>
            <Icon name="arrow-left" size={24} color="#ff4961" />
          </BackButton>
          <HeaderText>Inimigo Natural de Pragas</HeaderText>
        </Header>
        <Container>
          <Form ref={formRef} onSubmit={handleSignIn} style={{width: '100%'}}>
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

export default NewInimigos;
