import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 36px;

  justify-content: center;
  align-items: center;

  margin-top: 4px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #fff;
  font-size: 16px;
`;
