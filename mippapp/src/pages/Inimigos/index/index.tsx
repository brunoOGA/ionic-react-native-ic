/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ButtonRow from '../../../components/ButtonRow';

import api from '../../../services/api';

import {
  Container,
  CreateInimigos,
  Header,
  HeaderText,
  BackButton,
  Lista,
  Row,
  RowText,
} from './styles';

interface Inimigo {
  id: string;
  nome: string;
}

const Inimigos: React.FC = () => {
  const [inimigos, setInimigos] = useState<Inimigo[]>([]);

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
    api.get<Inimigo[]>('/inimigos/').then((response) => {
      setInimigos(response.data);
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
          <HeaderText>Inimigo Natural de Pragas</HeaderText>
        </Header>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Lista>
              {inimigos.map((inimigo, index) => (
                <Row key={inimigo.id}>
                  <ButtonRow
                    style={{backgroundColor: '#50c8ff'}}
                    color="white"
                    icon="reader"
                    onPress={() => {
                      navigation.navigate('InfoInimigos', {index});
                    }}
                  />
                  <RowText>{inimigo.nome}</RowText>
                  <ButtonRow
                    style={{backgroundColor: '#ffd534'}}
                    color="black"
                    icon="pencil"
                    onPress={() => {
                      navigation.navigate('AlterInimigos', {index});
                    }}
                  />
                  <ButtonRow
                    style={{backgroundColor: '#ff4961'}}
                    color="white"
                    icon="trash"
                    onPress={async () => {
                      await api.delete(`/inimigos/${index}`);
                      await api
                        .get<Inimigo[]>('/inimigos/')
                        .then((response) => {
                          setInimigos(response.data);
                        });
                    }}
                  />
                </Row>
              ))}
            </Lista>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateInimigos onPress={() => navigation.navigate('NewInimigos')}>
        <Icon name="plus" size={24} color="white" />
      </CreateInimigos>
    </>
  );
};

export default Inimigos;
