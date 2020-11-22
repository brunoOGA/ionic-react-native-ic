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

const Pesquisa: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Header>
          <HeaderText>Gerenciamento de URs</HeaderText>
          <HeaderText>Participantes da Pesquisa</HeaderText>
        </Header>
        <Container>
          <Lista>
            <Row>
              <ButtonRow
                style={{backgroundColor: '#50c8ff'}}
                color="white"
                icon="reader"
              />
              <RowText>Safra 2020/2021</RowText>
              <ButtonRow
                style={{backgroundColor: '#f4f5f8'}}
                color="black"
                icon="eye"
              />
              <ButtonRow
                style={{backgroundColor: '#92949c'}}
                color="white"
                icon="bug"
                onPress={() => {
                  navigation.navigate('IndexAnotacao');
                }}
              />
              <ButtonRow
                style={{backgroundColor: '#2dd36f'}}
                color="white"
                icon="leaf"
              />
              <ButtonRow
                style={{backgroundColor: '#222428'}}
                color="white"
                icon="skull"
              />
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
          <FooterButton
            onPress={() => {
              navigation.navigate('UnidadeDeReferencia');
            }}>
            <Icon name="people" size={24} color="#a0a0a0" />
            <>
              <Text style={{color: '#a0a0a0'}}>Unidade de </Text>
              <Text style={{color: '#a0a0a0'}}>Referência</Text>
            </>
          </FooterButton>
          <FooterButton>
            <Icon name="calendar" size={24} color="#428cff" />
            <Text style={{color: '#428cff'}}>Pesquisa</Text>
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

export default Pesquisa;
