import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 16px 0;
`;

export const Header = styled.View`
  min-height: 56px;
  border-bottom-width: 2px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: #454545;
  font-size: 22px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const Footer = styled.View`
  min-height: 56px;
  border-top-width: 2px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterButton = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 1px;
`;

export const Lista = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  height: 43px;
  width: 100%;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;
`;

export const RowText = styled.Text`
  color: #454545;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
  flex: 2;
`;

export const Create = styled.TouchableOpacity`
  position: absolute;
  bottom: 80px;
  right: 40px;

  width: 64px;
  height: 64px;

  border-radius: 32px;

  background: #428cff;

  display: flex;
  justify-content: center;
  align-items: center;

  border-width: 3px;
  border-color: rgba(0, 0, 0, 0.05);
`;
