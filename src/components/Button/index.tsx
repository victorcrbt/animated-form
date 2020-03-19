import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonTextProps } from './types';
import { Container, ButtonText } from './styles';

interface Props {
  textStyle?: ButtonTextProps;
}

type ButtonProps = TouchableOpacityProps & Props;

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  textStyle,
  ...rest
}) => {
  return (
    <Container style={style} {...rest}>
      <ButtonText
        color={textStyle?.color || '#fff'}
        bold={textStyle?.bold === undefined && true}
        size={textStyle?.size || 16}
      >
        {children}
      </ButtonText>
    </Container>
  );
};

export default Button;
