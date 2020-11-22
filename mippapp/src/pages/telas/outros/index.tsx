/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Button from '../../../components/Button';

import {
  Container,
  Header,
  HeaderText,
  Row,
  RowTitle,
  Footer,
  FooterButton,
} from './styles';

const Outros: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Header>
        <HeaderText>Outros</HeaderText>
      </Header>
      <Container>
        <>
          <Row>
            <RowTitle>Pesquisa</RowTitle>
            <Button style={{backgroundColor: '#428cff'}}> SAFRA</Button>
            <Button style={{backgroundColor: '#428cff'}}>CULTIVAR</Button>
          </Row>
          <Row>
            <RowTitle>MIP</RowTitle>
            <Button
              style={{backgroundColor: '#428cff'}}
              onPress={() => {
                navigation.navigate('IndexPragas');
              }}>
              PRAGAS
            </Button>
            <Button
              style={{backgroundColor: '#428cff'}}
              onPress={() => {
                navigation.navigate('IndexDoencas');
              }}>
              DOENÇAS DE PRAGAS
            </Button>
            <Button
              style={{backgroundColor: '#428cff'}}
              onPress={() => {
                navigation.navigate('IndexInimigos');
              }}>
              INIMIGOS NATURAIS
            </Button>
          </Row>
          <Row>
            <RowTitle>MID</RowTitle>
            <Button style={{backgroundColor: '#428cff'}}>ENTIDADES</Button>
            <Button style={{backgroundColor: '#428cff'}}>PROFISSIONAIS</Button>
          </Row>
          <Row>
            <RowTitle>Pulverização</RowTitle>
            <Button style={{backgroundColor: '#428cff'}}>ALVOS/FUNÇÕES</Button>
            <Button style={{backgroundColor: '#428cff'}}>PRODUTOS</Button>
          </Row>
          <Row>
            <RowTitle>Usuários</RowTitle>
            <Button style={{backgroundColor: '#428cff'}}>
              GERENCIAMENTO DE USUÁRIOS
            </Button>
          </Row>
        </>
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
        <FooterButton
          onPress={() => {
            navigation.navigate('Pesquisa');
          }}>
          <Icon name="calendar" size={24} color="#a0a0a0" />
          <Text style={{color: '#a0a0a0'}}>Pesquisa</Text>
        </FooterButton>
        <FooterButton>
          <Icon name="reorder-four-outline" size={24} color="#428cff" />
          <Text style={{color: '#428cff'}}>Outros</Text>
        </FooterButton>
      </Footer>
    </ScrollView>
  );
};

export default Outros;
