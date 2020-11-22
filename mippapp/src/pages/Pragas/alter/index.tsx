/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useNavigation, useRoute} from '@react-navigation/native';
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

interface Praga {
  id: string;
  nome: string;
  nomeCientifico: string;
}

interface RouteParams {
  index: Number;
}

const AlterPragas: React.FC = () => {
  const [praga, setPraga] = useState<Praga | null>(null);
  const [tamanho, setTamanho] = useState('>=1,5cm');
  const formRef = useRef<FormHandles>(null);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();
  const index = routeParams.index;
  const nomeCientificoInputRef = useRef<TextInput>(null);

  useEffect(() => {
    api.get(`/pragas/${index}`).then((response) => {
      setPraga(response.data);
      setTamanho(response.data.tamanho);
    });
  }, []);

  const handleSignIn = useCallback(
    async (data: CriarPraga) => {
      await api.put(`/pragas/${index}`, {...data, tamanho});
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
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#ff4961" />
          </BackButton>
          <HeaderText>Praga</HeaderText>
        </Header>
        <Container>
          <Form
            initialData={{
              nome: praga?.nome,
              nomeCientifico: praga?.nomeCientifico,
            }}
            ref={formRef}
            onSubmit={handleSignIn}
            style={{width: '100%'}}>
            <Input
              name="nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                nomeCientificoInputRef.current?.focus();
              }}>
              Nome:
            </Input>
            <Input ref={nomeCientificoInputRef} name="nomeCientifico">
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
              style={{backgroundColor: '#428cff'}}
              onPress={() => {
                formRef.current?.submitForm();
                formRef.current?.setFieldValue('nomeCientifico', '');
                formRef.current?.setFieldValue('nome', '');
              }}>
              SALVAR
            </Button>
            <Button
              style={{backgroundColor: '#ff4961'}}
              onPress={() => {
                formRef.current?.setFieldValue('nomeCientifico', '');
                formRef.current?.setFieldValue('nome', '');

                cancel();
              }}>
              CANCELAR
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AlterPragas;
