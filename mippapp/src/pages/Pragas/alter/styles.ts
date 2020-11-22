import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const BackButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
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

export const PickerContainer = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: white;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-color: rgba(0, 0, 0, 0.2);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PickerContainerText = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-right: 8px;
  max-width: 66%;
`;
