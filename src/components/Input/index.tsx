import React, { useState } from 'react';
import { TextInputProps, Animated } from 'react-native';

import { Container, TextInput, Focused } from './styles';

const Input: React.FC<TextInputProps> = props => {
  const [width] = useState(new Animated.Value(0));

  function focusAnimation(): void {
    Animated.timing(width, {
      toValue: 1,
      duration: 150,
    }).start();
  }

  function blurAnimation(): void {
    Animated.timing(width, {
      toValue: 0,
      duration: 100,
    }).start();
  }

  return (
    <Container>
      <TextInput onFocus={focusAnimation} onBlur={blurAnimation} {...props} />

      <Focused
        style={{
          width: width.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
        }}
      />
    </Container>
  );
};

export default Input;
