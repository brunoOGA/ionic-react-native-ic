import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
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

export const RowTitle = styled.Text`
  color: #999999;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  padding: 8px 16px;
  border-bottom-width: 2px;
  border-color: rgba(0, 0, 0, 0.2);
`;
export const Calendar = styled.View`
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

export const CalendarText = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-right: 8px;
  max-width: 66%;
`;
export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
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
