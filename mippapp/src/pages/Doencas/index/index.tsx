/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ButtonRow from '../../../components/ButtonRow';

import api from '../../../services/api';

import {
  Container,
  CreateDoencas,
  Header,
  HeaderText,
  BackButton,
  Lista,
  Row,
  RowText,
} from './styles';

interface Doenca {
  id: string;
  nome: string;
}

const Doencas: React.FC = () => {
  const [doencas, setDoencas] = useState<Doenca[]>([]);

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
    api.get<Doenca[]>('/doencas/').then((response) => {
      setDoencas(response.data);
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
          <HeaderText>Doença de Praga</HeaderText>
        </Header>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Lista>
              {doencas.map((doenca, index) => (
                <Row key={doenca.id}>
                  <ButtonRow
                    style={{backgroundColor: '#50c8ff'}}
                    color="white"
                    icon="reader"
                    onPress={() => {
                      navigation.navigate('InfoDoencas', {index});
                    }}
                  />
                  <RowText>{doenca.nome}</RowText>
                  <ButtonRow
                    style={{backgroundColor: '#ffd534'}}
                    color="black"
                    icon="pencil"
                    onPress={() => {
                      navigation.navigate('AlterDoencas', {index});
                    }}
                  />
                  <ButtonRow
                    style={{backgroundColor: '#ff4961'}}
                    color="white"
                    icon="trash"
                    onPress={async () => {
                      await api.delete(`/doencas/${index}`);
                      await api.get<Doenca[]>('/doencas/').then((response) => {
                        setDoencas(response.data);
                      });
                    }}
                  />
                </Row>
              ))}
            </Lista>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateDoencas onPress={() => navigation.navigate('NewDoencas')}>
        <Icon name="plus" size={24} color="white" />
      </CreateDoencas>
    </>
  );
};

export default Doencas;
