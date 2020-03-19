import { Dimensions, Platform } from 'react-native';

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

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const SignUpLink = styled.TouchableOpacity`
  align-self: center;
  margin-top: ${Platform.OS === 'ios'
    ? Dimensions.get('window').height / 50
    : Dimensions.get('window').height / 35}px;
  padding: 5px;
`;

export const SignUpText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const BottomArea = styled.View`
  position: absolute;
  bottom: ${-Dimensions.get('window').height / 6}px;

  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height / 4}px;
`;
