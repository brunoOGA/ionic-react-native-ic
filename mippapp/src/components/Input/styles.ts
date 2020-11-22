import styled, {css} from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: white;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-color: rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #428cff;
    `}

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  width: 100%;
`;

export const TextLabeL = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-right: 8px;
  max-width: 66%;
`;
