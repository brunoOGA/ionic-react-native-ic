import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, Icon} from './styles';

interface ButtonProps extends RectButtonProperties {
  icon: string;
  color: string;
  style: object;
}

const ButtonRow: React.FC<ButtonProps> = ({
  icon,
  color,
  style = {},
  ...rest
}) => (
  <Container {...rest} style={style}>
    <Icon name={icon} size={18} color={color} />
  </Container>
);

export default ButtonRow;
