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

export const Row = styled.View`
  min-height: 56px;
  border-bottom-width: 2px;
  border-color: rgba(0, 0, 0, 0.2);
`;

export const RowTitle = styled.Text`
  color: #999999;
  font-size: 16px;
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
