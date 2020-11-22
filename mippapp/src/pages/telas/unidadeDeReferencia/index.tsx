/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

import ButtonRow from '../../../components/ButtonRow';

import {
  Container,
  Header,
  HeaderText,
  Lista,
  Row,
  Create,
  RowText,
  Footer,
  FooterButton,
} from './styles';

const UnidadeDeReferencia: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Header>
          <HeaderText>Gerenciamento de URs</HeaderText>
        </Header>
        <Container>
          <Lista>
            <Row>
              <ButtonRow
                style={{backgroundColor: '#50c8ff'}}
                color="white"
                icon="reader"
              />
              <RowText>Canela - Antonio da Silva</RowText>
              <ButtonRow
                style={{backgroundColor: '#ffd534'}}
                color="black"
                icon="pencil"
              />
              <ButtonRow
                style={{backgroundColor: '#ff4961'}}
                color="white"
                icon="trash"
              />
            </Row>
          </Lista>
        </Container>
        <Footer>
          <FooterButton>
            <Icon name="people" size={24} color="#428cff" />
            <>
              <Text style={{color: '#428cff'}}>Unidade de </Text>
              <Text style={{color: '#428cff'}}>Referência</Text>
            </>
          </FooterButton>
          <FooterButton
            onPress={() => {
              navigation.navigate('Pesquisa');
            }}>
            <Icon name="calendar" size={24} color="#a0a0a0" />
            <Text style={{color: '#a0a0a0'}}>Pesquisa</Text>
          </FooterButton>
          <FooterButton
            onPress={() => {
              navigation.navigate('Outros');
            }}>
            <Icon name="reorder-four-outline" size={24} color="#a0a0a0" />
            <Text style={{color: '#a0a0a0'}}>Outros</Text>
          </FooterButton>
        </Footer>
      </ScrollView>

      <Create>
        <IconFeather name="plus" size={24} color="white" />
      </Create>
    </>
  );
};

export default UnidadeDeReferencia;
