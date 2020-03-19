import { Animated } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;

  width: 100%;
  height: 50px;
  margin: 10px 0;

  background: #fff;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#777' as string,
})`
  height: 100%;
  padding: 0 10px;

  color: #444;

  border-radius: 5px;
`;

export const Focused = styled(Animated.View)`
  position: absolute;

  align-self: center;

  height: 50px;

  border-bottom-color: #ff5a59;
  border-bottom-width: 1px;
`;
