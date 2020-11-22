/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ButtonRow from '../../../components/ButtonRow';

import api from '../../../services/api';

import {
  Container,
  CreateAnotacoes,
  Header,
  HeaderText,
  BackButton,
  Lista,
  Row,
  RowText,
} from './styles';

interface Praga {
  id: string;
  mediaEncontrada: string;
  nome: string;
  tamanho: string;
}
interface Doenca {
  id: string;
  mediaEncontrada: string;
  nome: string;
}
interface Inimigos {
  id: string;
  mediaEncontrada: string;
  nome: string;
}
interface Anotacao {
  id: string;
  dataDaColeta: Date;
  estadioDaCultura: string;
  desfolha: 'string';
  pragas: Praga[];
  doencas: Doenca[];
  inimigos: Inimigos[];
}

const Anotacoes: React.FC = () => {
  const [anotacoes, setAnotacoes] = useState<Anotacao[] | null>([]);

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
    api.get<any>('/anotacoes/').then((response) => {
      setAnotacoes(response.data);
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
          <HeaderText>Anotação de Campo</HeaderText>
        </Header>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Lista>
              {anotacoes?.map((anotacao, index) => (
                <Row key={anotacao.id}>
                  <ButtonRow
                    style={{backgroundColor: '#50c8ff'}}
                    color="white"
                    icon="reader"
                    onPress={() => {
                      navigation.navigate('InfoAnotacao', {index});
                    }}
                  />
                  <RowText>
                    {new Date(anotacao.dataDaColeta).getDate()}/
                    {new Date(anotacao.dataDaColeta).getMonth() + 1}/
                    {new Date(anotacao.dataDaColeta).getFullYear()}
                  </RowText>
                  <ButtonRow
                    style={{backgroundColor: '#ffd534'}}
                    color="black"
                    icon="pencil"
                    onPress={() => {
                      navigation.navigate('AlterAnotacao', {index});
                    }}
                  />
                  <ButtonRow
                    style={{backgroundColor: '#ff4961'}}
                    color="white"
                    icon="trash"
                    onPress={async () => {
                      await api.delete(`/anotacoes/${index}`);
                      await api.get<any>('/anotacoes/').then((response) => {
                        setAnotacoes(response.data);
                      });
                    }}
                  />
                </Row>
              ))}
            </Lista>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAnotacoes onPress={() => navigation.navigate('NewAnotacao')}>
        <Icon name="plus" size={24} color="white" />
      </CreateAnotacoes>
    </>
  );
};

export default Anotacoes;
