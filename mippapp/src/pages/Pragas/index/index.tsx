/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ButtonRow from '../../../components/ButtonRow';

import api from '../../../services/api';

import {
  Container,
  CreatePragas,
  Header,
  HeaderText,
  BackButton,
  Lista,
  Row,
  RowText,
} from './styles';

interface Praga {
  id: string;
  nome: string;
  nomeCientifico: string;
}

const Pragas: React.FC = () => {
  const [pragas, setPragas] = useState<Praga[]>([]);

  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params;
  let aux;
  if (routeParams) {
    aux = routeParams;
  } else {
    aux = 0;
  }

  useEffect(() => {
    api.get<Praga[]>('/pragas/').then((response) => {
      setPragas(response.data);
    });
  }, [aux]);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Header>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" size={24} color="#454545" />
          </BackButton>
          <HeaderText>Praga</HeaderText>
        </Header>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Lista>
              {pragas.map((praga, index) => (
                <Row key={praga.id}>
                  <ButtonRow
                    style={{backgroundColor: '#50c8ff'}}
                    color="white"
                    icon="reader"
                    onPress={() => {
                      navigation.navigate('InfoPragas', {index});
                    }}
                  />
                  <RowText>{praga.nome}</RowText>
                  <ButtonRow
                    style={{backgroundColor: '#ffd534'}}
                    color="black"
                    icon="pencil"
                    onPress={() => {
                      navigation.navigate('AlterPragas', {index});
                    }}
                  />
                  <ButtonRow
                    style={{backgroundColor: '#ff4961'}}
                    color="white"
                    icon="trash"
                    onPress={async () => {
                      await api.delete(`/pragas/${index}`);
                      await api.get<Praga[]>('/pragas/').then((response) => {
                        setPragas(response.data);
                      });
                    }}
                  />
                </Row>
              ))}
            </Lista>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreatePragas onPress={() => navigation.navigate('NewPragas')}>
        <Icon name="plus" size={24} color="white" />
      </CreatePragas>
    </>
  );
};

export default Pragas;
