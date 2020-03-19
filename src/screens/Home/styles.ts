import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const SignInButton = styled(Button)`
  align-self: center;
  width: ${Dimensions.get('window').width - 100}px;
  margin-top: -20px;
`;

export const SignUpButton = styled(Button)`
  align-self: center;
  width: ${Dimensions.get('window').width - 100}px;
  margin-top: 20px;

  background: transparent;
  border-color: #fff;
  border-width: 2px;
`;

export const BottomArea = styled.View`
  position: absolute;
  bottom: 0;

  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height / 4}px;
`;
