/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import api from '../../../services/api';

import {
  Container,
  Header,
  BackButton,
  HeaderText,
  PickerContainer,
  PickerContainerText,
} from './styles';

interface CriarPraga {
  nome: string;
  nomeCientifico: string;
}

const NewPragas: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const nomeCientificoInputRef = useRef<TextInput>(null);
  const [tamanho, setTamanho] = useState('>=1,5cm');
  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async (data: CriarPraga) => {
      await api.post('/pragas/', {...data, tamanho});
      navigation.navigate('IndexPragas', data);
    },
    [navigation, tamanho],
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
          <BackButton onPress={() => navigation.navigate('IndexPragas')}>
            <Icon name="arrow-left" size={24} color="#ff4961" />
          </BackButton>
          <HeaderText>Praga</HeaderText>
        </Header>
        <Container>
          <Form ref={formRef} onSubmit={handleSignIn} style={{width: '100%'}}>
            <Input
              name="nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                nomeCientificoInputRef.current?.focus();
              }}>
              Nome:
            </Input>
            <Input
              ref={nomeCientificoInputRef}
              name="nomeCientifico"
              returnKeyType="done">
              Nome Científico:
            </Input>
            <PickerContainer>
              <PickerContainerText>Estádio da Cultura:</PickerContainerText>
              <Picker
                selectedValue={tamanho}
                style={{height: 50, width: 150}}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onValueChange={(itemValue, itemIndex) =>
                  setTamanho(itemValue.toString())
                }>
                <Picker.Item label=">=1,5cm" value="Pré-emergência" />
                <Picker.Item label="<1,5cm" value="<1,5cm" />
                <Picker.Item
                  label="Ninfa(3. ao .intar)"
                  value="Ninfa(3. ao .intar)"
                />
                <Picker.Item
                  label="Ponteiros atacados"
                  value="Ponteiros atacados"
                />
                <Picker.Item label="Adulto" value="Adulto" />
              </Picker>
            </PickerContainer>

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

export default NewPragas;
