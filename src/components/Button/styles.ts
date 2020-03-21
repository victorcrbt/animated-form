import styled from 'styled-components/native';

import { ButtonTextProps } from './types';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1 as number,
})`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 10px 0;

  background: #ff5a59;
  border-radius: 25px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${(props): string => props.color!};
  font-weight: ${(props): string => (props.bold ? 'bold' : 'normal')};
  font-size: ${(props): number => props.size!}px;
  text-transform: uppercase;
`;
